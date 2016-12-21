from django.db import IntegrityError
from django.contrib import auth
from django.contrib.auth.models import User
from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from api import models
from api import serializers
from api.permissions import IsStaffOrTargetUser

import datetime
import random

# TODO access_token
# Validation, Update, Create
def getAccesstoken(user):
    # Check this user's token exist or expired
    try:
       token = models.Token.objects.get(user=user)
    except models.Token.DoesNotExist:
       token = None

    time_now = datetime.datetime.now()
    if token is None:
        # non-exist
        # Create new one
        hash = random.getrandbits(128)
        token = models.Token(user=user, token=hash, expired_at=time_now + datetime.timedelta(days = 7))
        token.save()
    elif token.expired_at <= time_now:
        # expired, update new one
        hash = random.getrandbits(128)
        token.token = hash
        token.expired_at = time_now + datetime.timedelta(days = 7)
        token.save()

    # Normal status:
    # exist and not expired:
    # get that and push back to user
    return token.token

class VerifyToken(APIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        str_token = request.GET.get('access_token')
        time_now = datetime.datetime.now()
        res = {
            'is_authed': False,
            'detail': ''
        }
        try:
           token = models.Token.objects.get(token=str_token)
           if token.expired_at <= time_now:
               res['detail'] = 'No such token.'
               return Response(res)
           else:
               res['is_authed'] = True
               res['data'] = serializers.UserSerializer(token.user).data
               return Response(res)

        except models.Token.DoesNotExist:
            res['detail'] = 'No such token.'
            return Response(res)

# User login
class Login(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        data = request.data
        username = data['email']
        password = data['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None and user.is_active:
            auth.login(request, user)
            token = getAccesstoken(user)
            res = {
                'is_authed': True,
                'data': serializers.UserSerializer(user).data,
                'access_token': token
            }
            response = Response(res)
            response.set_cookie('access_token', token)
            response.set_cookie('uid', user.id)
            return response
        else:
            res = {
                'is_authed': False,
                'detail': 'No this user.'
            }
            return Response(res)

# User signup
class SignUp(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        data = request.data
        name = data['name']
        email = data['email']
        password = data['password']

        try:
            user = User.objects.create_user(username=email, first_name=name, password=password, email=email)
            user.save()
        except IntegrityError as ie:
            res = {
                'is_authed': False,
                'detail': 'Already exists',
                'error': str(ie)
            }
            return Response(res)

        user = auth.authenticate(username=email, password=password)

        if user is not None and user.is_active:
            auth.login(request, user)
            token = getAccesstoken(user)
            res = {
                'is_authed': True,
                'data': serializers.UserSerializer(user).data,
                'access_token': getAccesstoken(user)
            }
            response = Response(res)
            response.set_cookie('access_token', token)
            response.set_cookie('uid', user.id)
            return response
        else:
            res = {
                'is_authed': False,
                'detail': 'Can\'t create user.',
                'error': 'Authentication failure.'
            }
            return Response(res)
