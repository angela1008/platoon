from django.contrib.auth.models import User
from django.shortcuts import render

from rest_framework import generics, permissions

from api import serializers
from api.permissions import IsStaffOrTargetUser
# Create your views here.
## User
class UserList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer