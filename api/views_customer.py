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
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    def post(self, request, format = None):
        data = request.data.copy()
        data['from_ip'] = self.get_client_ip(request)
        serializer = serializers.InterestedUserSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

# User list for Admin
class InterestedUserList(generics.ListAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = apiModels.InterestedUser.objects.all()
    serializer_class = serializers.InterestedUserSerializer
