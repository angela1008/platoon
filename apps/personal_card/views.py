from django.shortcuts import render
from django.http import HttpResponse

def personal_card(request):
	return render(request, 'personal_card_page/personal_card_main_page.html')

def personal_card_detail(request):
	return render(request, 'personal_card_page/personal_card_detail.html')

def personal_card_box(request):
	return render(request, 'personal_card_page/card_box.html')