from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

def content_file_name(instance, filename):
    ext = filename.split(".")[-1]
    return 'media/user_pic/' + str(instance.user.username) + '.' + ext

def collection_pic_name(instance, filename):
    # ext = filename.split(".")[-1]
    return 'media/collection_pic/' + filename

# User who only interested before production online
class InterestedUser(models.Model):
    from_ip = models.CharField(max_length=254)
    email = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# API Token for restful login and signup
class Token(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=254)
    note = models.CharField(max_length=254, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    expired_at = models.DateTimeField(null=True, blank=True)

# User's extension fields
class UserExtension(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=254, null=True, blank=True)
    company = models.CharField(max_length=254, null=True, blank=True)
    education = models.CharField(max_length=254, null=True, blank=True)
    # is_current = models.BooleanField(default=True)
    # start_at = models.DateTimeField(blank=True)
    # end_at = models.DateTimeField(blank=True)
    photo = models.ImageField(upload_to=content_file_name, default='/media/user_pic/default.jpg', null=True, blank=True)
    # thumbnail = ImageRatioField('picture', '150x150')
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    # def get_thumbnail_url(self, h, w):
    #     thumbnail_url = get_thumbnailer(self.picture).get_thumbnail({
    #         'size': (h, w),
    #         'box': self.thumbnail,
    #         'crop': True,
    #         'detail': True,
    #     }).url
    #     return thumbnail_url

# User's relation
class UserRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card_user = models.ForeignKey(User, related_name='%(class)s_card_user')
    is_favorite = models.BooleanField(default=False)
    note = models.CharField(max_length=254, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# User's Skills
class Skill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=254)
    order = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# User's experiences
class Experience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=254)
    year = models.CharField(max_length=5, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# Collections
class Collection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=254)
    picture = models.ImageField(upload_to=collection_pic_name, default='/media/collection_pic/default.jpg', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# Certifications
class Certification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=254)
    start_year = models.CharField(max_length=5, null=True, blank=True)
    end_year = models.CharField(max_length=5, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# Languages, provide mother language
class Language(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=254)
    order = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# WantToDo, Limit to 3
class WantToDo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=254)
    detail = models.CharField(max_length=254, null=True, blank=True)
    order = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

# Generate Exchange Qrcode
class GenExgQr(models.Model):
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="from_user", null=True, blank=True)
    to_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="to_user", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    expired_at = models.DateTimeField(null=True, blank=True)
