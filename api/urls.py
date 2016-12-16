from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from api import views, views_qrcode, views_qraccept
from api import views_customer as viewCus


# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # InterestedUser
    url(r'^interested-user/$',
        viewCus.InterestedUser.as_view(),
        name='interested-user'),

    # InterestedUserList
    url(r'^interested-users/$',
        viewCus.InterestedUserList.as_view(),
        name='interested-user-list'),

    # User
    url(r'^users/$',
        views.UserList.as_view(),
        name='user-list'),

    url(r'^user/(?P<pk>[0-9]+)/$',
        views.UserDetail.as_view(),
        name='user-detail'),

    url(r'^userextends/$',
      views.UserExtendsList.as_view(),
      name='user-sextends-list'),

    url(r'^userextend/(?P<user>[0-9]+)/$',
      views.UserExtendsDetail.as_view(),
      name='user-extend-detail'),

    url(r'^userrelations/$',
      views.UserRelationList.as_view(),
      name='user-relation-list'),

    url(r'^userrelation/(?P<pk>[0-9]+)/$',
      views.UserRelationDetail.as_view(),
      name='user-relation-detail'),

    url(r'^userskills/$',
      views.UserSkillList.as_view(),
      name='user-skill-list'),

    url(r'^userskill/(?P<pk>[0-9]+)/$',
      views.UserSkillDetail.as_view(),
      name='user-skill-detail'),

    url(r'^userexperiences/$',
      views.UserExperienceList.as_view(),
      name='user-experience-list'),

    url(r'^userexperience/(?P<pk>[0-9]+)/$',
      views.UserExperienceDetail.as_view(),
      name='user-experience-detail'),

    url(r'^usercollections/$',
      views.UserCollectionList.as_view(),
      name='user-collection-list'),

    url(r'^usercollection/(?P<pk>[0-9]+)/$',
      views.UserCollectionDetail.as_view(),
      name='user-collection-detail'),

    url(r'^usercertifications/$',
      views.UserCertificationList.as_view(),
      name='user-certification-list'),

    url(r'^usercertification/(?P<pk>[0-9]+)/$',
      views.UserCertificationDetail.as_view(),
      name='user-certification-detail'),

    url(r'^userlanguages/$',
      views.UserLanguageList.as_view(),
      name='user-language-list'),

    url(r'^userlanguage/(?P<pk>[0-9]+)/$',
      views.UserLanguageDetail.as_view(),
      name='user-language-detail'),

    url(r'^userwanttodos/$',
      views.UserWantToDoList.as_view(),
      name='user-wanttodo-list'),

    url(r'^userwanttodo/(?P<pk>[0-9]+)/$',
      views.UserWantToDoDetail.as_view(),
      name='user-wanttodo-detail'),

    url(r'^genexgqr/$',
      views_qrcode.GenExgQrList.as_view(),
      name='user-genexgqr-list'),

    url(r'^scanqr/$',
      views_qrcode.GenExgQrList.as_view(),
      name='user-scanqr-list'),

    url(r'^checkqraccept/$',
      views_qraccept.CheckQrAccept.as_view(),
      name='user-checkqraccept'),

]
