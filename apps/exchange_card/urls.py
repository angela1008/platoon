from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^exchange/$', views.exchange_page, name='exchange_page'),
]