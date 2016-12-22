from django.contrib.auth.models import User

from rest_framework import serializers
from api import models

# InterestedUser
class InterestedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.InterestedUser

# User's
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'email')
        write_only_fields = ('password',)

    def restore_object(self, attrs, instance=None):
        # call set_password on user object. Without this
        # the password will be stored in plain text.
        user = super(UserSerializer, self).restore_object(attrs, instance)
        user.set_password(attrs['password'])
        return user


class UserExtensionSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserExtension
        url_field_name = 'user'


class UserRelationSerializer(serializers.ModelSerializer):
    # Serialize the user relationship first and then serialize the card user's detail "for each time".
    card_user_detail = UserSerializer(source = 'card_user', read_only = True)

    class Meta:
        model = models.UserRelation
        # fields = ('user', 'card_user_detail', 'is_favorite', 'note', 'created_at', 'updated_at')


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Skill


class ExperienceSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Experience


class CollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Collection


class CertificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Certification


class LanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Language


class WantToDoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.WantToDo

class GenExgQrSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.GenExgQr
