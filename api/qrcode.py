from django.contrib.auth.models import User
from django.db.models import Q

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api import models as apiModels
from api import serializers
from api.permissions import IsStaffOrTargetUser

import datetime
import random

#class-based View#
class GenExgQrList(APIView):
    #Why must be there?# For override permission, APIView has this permission var that you can custom your own, otherwise it'll be the default at settings.py
    permission_classes = (IsStaffOrTargetUser,)

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
        from_user = apiModels.User.objects.get(id=long_from_user)
        genexgqr = apiModels.GenExgQr.objects.get(pk=exchange_code)
        genexgqr.created_at = time_now
        genexgqr.expired_at = time_now + datetime.timedelta(minutes = 5)
        genexgqr.from_user = from_user
        genexgqr.save()
        serializer = serializers.GenExgQrSerializer(genexgqr)
        return Response(serializer.data)
        # TODO deal with errors
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # genexgqr = apiModels.GenExgQr.objects.all()
        # serializer = serializers.GenExgQrSerializer(genexgqr, many=True)
        # return Response(serializer.data)
