from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response

from api import models as apiModels
from api import serializers
from api import permissions

class CheckQrAccept(APIView):
    permission_classes = (permissions.IsStaffOrTargetUser,)

    def get(self, request):
        """
        User(from_user) ask for "Is to_user field be filled in?".
        Yes return user's(to_user) profile. No return False(Not yet!).
        """
        long_from_user = request.GET.get('from_user', None)
        exchange_code = request.GET.get('exchange_code', None)
        from_user = apiModels.User.objects.get(id=long_from_user)
        genexgqr = apiModels.GenExgQr.objects.get(id=exchange_code, from_user=from_user)
        if genexgqr.to_user != None:
            to_user = User.objects.get(id=genexgqr.to_user.id)
            serializer_to_user = serializers.UserSerializer(to_user)
            return Response({"isSuccess": "true","detail": "Exchange Success.", "data": serializer_to_user.data})
        else:
            return Response({'isSuccess': 'false','detail': 'Exchange Failed.'})
