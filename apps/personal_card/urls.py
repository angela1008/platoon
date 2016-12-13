from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.personal_card, name='personal_card'),
    url(r'^detail/$', views.personal_card_detail, name='personal_card_detail'),
    url(r'^box/$', views.personal_card_box, name='personal_card_box'),
    url(r'^edit/$', views.edit_personal_card, name='edit_personal_card'),
]