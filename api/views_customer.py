from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics, permissions

from api import serializers
from api import models as apiModels
from api.permissions import IsStaffOrTargetUser

# User who is interested will send email
class InterestedUser(APIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    # queryset = apiModels.InterestedUser.objects.all()
    # serializer_class = serializers.InterestedUserSerializer

    def post(self, request, format = None):
        serializer = InterestedUserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# User list for Admin
class InterestedUserList(generics.ListAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.InterestedUser.objects.all()
    serializer_class = serializers.InterestedUserSerializer
