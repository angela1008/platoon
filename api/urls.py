from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from api import views


# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # User
    url(r'^users/$', 
        views.UserList.as_view(), 
        name='user-list'),
    
    url(r'^user/(?P<pk>[0-9]+)/$', 
        views.UserDetail.as_view(), 
        name='user-detail'),

    # url(r'^userextends/$', 
    #   views.UserExtendsList.as_view(), 
    #   name='user-extends-list'),
    
    # url(r'^userextends/(?P<user>[0-9]+)/$', 
    #   views.UserExtendsDetail.as_view(), 
    #   name='user-extends-detail'),
]