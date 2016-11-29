from rest_framework import generics, permissions

from api import serializers
from api import models as apiModels

## User who is interested
class InterestedList(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    queryset = apiModels.InterestedUser.objects.all()
    serializer_class = serializers.InterestedUserSerializer
