from django.shortcuts import render
from django.http import HttpResponse

def settings(request):
	return render(request, 'settings/settings.html')