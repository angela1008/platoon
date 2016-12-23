from django.contrib.auth.models import User
from django.http import Http404
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from api import models as apiModels
from api import serializers
from api.permissions import IsStaffOrTargetUser

class UserDetail(APIView):
    """
    Username, Email, Skill,
    Language, Company, Collections, Education,
    Certification, Experiences, Want to do.

    db has but front No: phone, photo
    Yes: Username, Email, Company, Education, Skill, Language,

    Not Yet: Collections, Certification, Experiences, Want to do
    """
    permission_classes = (permissions.AllowAny,)

    # long_user = request.GET.get('user', None)

    # def get_user(self, request):
    #     try:
    #         long_user = request.GET.get('user', None)
    #         return User.objects.get(pk=long_user)
    #     except User.DoesNotExist:
    #         raise Http404
    #
    # def get_userextension(self, request):
    #     try:
    #         long_user = request.GET.get('user', None)
    #         return apiModels.UserExtension.objects.get(user=long_user)
    #     except User.DoesNotExist:
    #         raise Http404
    #
    # def get_userskill(self, request):
    #     try:
    #         long_user = request.GET.get('user', None)
    #         return apiModels.Skill.objects.get(user=long_user)
    #     except User.DoesNotExist:
    #         raise Http404
    #
    # # def get_userlanguage(self, request):
    # #     try:
    # #         long_user = request.GET.get('user', None)
    # #         return apiModels.Language.objects.get(user=long_user)
    # #     except User.DoesNotExist:
    # #         raise Http404
    #
    # ## TODO situation of more than one data
    # ## TODO user without one detail function exists will be error
    # def get(self, pk):
    #     user = self.get_user(pk)
    #     userextension = self.get_userextension(pk)
    #     userskill = self.get_userskill(pk)
    #     # userlanguage = self.get_userlanguage(pk)
    #
    #     user_serializer = serializers.UserSerializer(user)
    #     userextend_serializer = serializers.UserExtensionSerializer(userextension)
    #     userskill_serializer = serializers.SkillSerializer(userskill)
    #     # userlanguage_serializer = serializers.LanguageSerializer(userlanguage, many=True)
    #
    #
    #     return Response({"user": user_serializer.data,
    #     "userextension": userextend_serializer.data,
    #     "skill": userskill_serializer.data,
    #     # "language": userlanguage_serializer.data,
    #     })

    def get(self, request):
        long_user = request.GET.get('user', None)

        #
        user = User.objects.get(id=long_user)
        userextension = apiModels.UserExtension.objects.get(user=long_user)
        userskills = apiModels.Skill.objects.filter(user=long_user)
        userlanguages = apiModels.Language.objects.filter(user=long_user)
        usercollections = apiModels.Collection.objects.filter(user=long_user)
        usercertifications = apiModels.Certification.objects.filter(user=long_user)
        userexperiences = apiModels.Experience.objects.filter(user=long_user)
        userwanttodos = apiModels.WantToDo.objects.filter(user=long_user)

        # Serialize the data by
        # Nested-Serializer
        user_serializer = serializers.UserSerializer(user)
        userextension_serializer = serializers.UserExtensionSerializer(userextension)
        userskill_serializer = serializers.SkillSerializer(userskills, many=True)
        userlanguage_serializer = serializers.LanguageSerializer(userlanguages, many=True)
        usercollection_serializer = serializers.CollectionSerializer(usercollections, many=True)
        usercertification_serializer = serializers.CertificationSerializer(usercertifications, many=True)
        userexperiences_serializer = serializers.ExperienceSerializer(userexperiences, many=True)
        userwanttodo_serializer = serializers.WantToDoSerializer(userwanttodos, many=True)


        return Response({"user": user_serializer.data,
        "userextension": userextension_serializer.data,
        "userskill": userskill_serializer.data,
        "userlanguage": userlanguage_serializer.data,
        "usercollection": usercollection_serializer.data,
        "usercertification": usercertification_serializer.data,
        "userexperiences": userexperiences_serializer.data,
        "userwanttodo": userwanttodo_serializer.data})
        # return HttpResponse(user)
