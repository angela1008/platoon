from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from api import models as apiModels
from api import serializers
from api.permissions import IsStaffOrTargetUser

class CardBox(APIView):
    """
    Create user's card box.
    Fetch the user's friends through UserRelation model,
    then return their detail.
    """
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        long_user = request.GET.get('user', None)
        user = User.objects.get(id=long_user)

        # Filter all relation in database.
        userrelation = apiModels.UserRelation.objects.filter(user=user)

        # Serialize the data by
        # Nested-Serializer
        serializer = serializers.UserRelationSerializer(userrelation, many=True)
        return Response(serializer.data)
