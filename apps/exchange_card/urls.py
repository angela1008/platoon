from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.exchange_page, name='exchange_page'),
]