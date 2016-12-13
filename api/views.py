from django.contrib.auth.models import User
from django.shortcuts import render

from rest_framework import generics, permissions

from api import serializers
from api import models as apiModels
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

class UserExtendsList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.UserExtension.objects.all()
    serializer_class = serializers.UserExtensionSerializer

class UserExtendsDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.UserExtension.objects.all()
    serializer_class = serializers.UserExtensionSerializer
    lookup_field = 'user'

class UserRelationList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.UserRelation.objects.all()
    serializer_class = serializers.UserRelationSerializer

class UserRelationDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.UserRelation.objects.all()
    serializer_class = serializers.UserRelationSerializer

class UserSkillList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.Skill.objects.all()
    serializer_class = serializers.SkillSerializer

class UserSkillDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.Skill.objects.all()
    serializer_class = serializers.SkillSerializer

class UserExperienceList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.Experience.objects.all()
    serializer_class = serializers.ExperienceSerializer

class UserExperienceDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.Experience.objects.all()
    serializer_class = serializers.ExperienceSerializer

class UserCollectionList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.Collection.objects.all()
    serializer_class = serializers.CollectionSerializer

class UserCollectionDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.Collection.objects.all()
    serializer_class = serializers.CollectionSerializer

class UserCertificationList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.Certification.objects.all()
    serializer_class = serializers.CertificationSerializer

class UserCertificationDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.Certification.objects.all()
    serializer_class = serializers.CertificationSerializer

class UserLanguageList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.Language.objects.all()
    serializer_class = serializers.LanguageSerializer

class UserLanguageDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.Language.objects.all()
    serializer_class = serializers.LanguageSerializer

class UserWantToDoList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.WantToDo.objects.all()
    serializer_class = serializers.WantToDoSerializer

class UserWantToDoDetail(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffOrTargetUser,)
    queryset = apiModels.WantToDo.objects.all()
    serializer_class = serializers.WantToDoSerializer
