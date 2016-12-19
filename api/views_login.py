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

import random

# TODO access_token
# Validation, Update, Create
def getAccesstoken(user):
    # Check this user's token exist or expired
    # non-exist or expired:
    # Create new one or update new one
    hash = random.getrandbits(128)

    # exist and not expired:
    # get that and push back to user
    return '123';

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
            res = {
                'is_authed': True,
                'data': serializers.UserSerializer(user).data,
                'access_token': getAccesstoken(user)
            }
            return Response(res)
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
            res = {
                'is_authed': True,
                'data': serializers.UserSerializer(user).data,
                'access_token': getAccesstoken(user)
            }
            return Response(res)
        else:
            res = {
                'is_authed': False,
                'detail': 'Can\'t create user.',
                'error': 'Authentication failure.'
            }
            return Response(res)
