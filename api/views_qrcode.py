from django.contrib.auth.models import User
from django.db.models import Q

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api import models as apiModels
from api import serializers
from api import permissions

import datetime
import random

#class-based View#
class GenExgQrList(APIView):
    #Why must be there?# For override permission, APIView has this permission var that you can custom your own, otherwise it'll be the default at settings.py
    permission_classes = (permissions.IsStaffOrTargetUser,)

    def get(self, request):
        """
        Initialize 9999 empty datas in the database.
        Select unused ids and expired ids from database.
        Randomly choose one id as exchange code.
        The exchange code is tied to two users, and return to the database.
        """
        # Choose exchange code by random id
        time_now = datetime.datetime.now()
        # Q for query
        # values_list means that turns queryset to list of ids.
        genexgqrs = apiModels.GenExgQr.objects.filter(Q(from_user=None) | Q(expired_at__lt=time_now)).values_list('id', flat=True)
        exchange_code = random.choice(genexgqrs)

        # Update data
        long_from_user=request.GET.get('from_user', None)
        from_user = User.objects.get(id=long_from_user)
        genexgqr = apiModels.GenExgQr.objects.get(pk=exchange_code)
        genexgqr.created_at = time_now
        genexgqr.expired_at = time_now + datetime.timedelta(minutes = 5)
        genexgqr.from_user = from_user
        genexgqr.save()
        serializer = serializers.GenExgQrSerializer(genexgqr)
        return Response(serializer.data)
        # TODO deal with errors
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request):
        """
        save exchange code, to_user id
        create user relation*2 (because is_favorie)
        """
        # save
        to_user = request.data['user']
        user = User.objects.get(pk=to_user)
        exchange_code = request.data['exchange_code']
        genexgqr = apiModels.GenExgQr.objects.get(id=exchange_code)
        genexgqr.to_user = user
        genexgqr.save()

        # create relation
        # userrelation = apiModels.UserRelation.objects.create()
        userrelation = apiModels.UserRelation(user=user, card_user=genexgqr.from_user, is_favorite=False)
        userrelation_otherside = apiModels.UserRelation(user=genexgqr.from_user, card_user=user, is_favorite=False)
        userrelation.save()
        userrelation_otherside.save()

        user_otherside = User.objects.get(pk=genexgqr.from_user.id)
        serializer_user_otherside = serializers.UserSerializer(user_otherside)
        return Response(serializer_user_otherside.data, status=status.HTTP_201_CREATED)
