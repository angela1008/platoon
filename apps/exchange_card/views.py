from django.shortcuts import render
from django.http import HttpResponse

def exchange_page(request):
	return render(request, 'exchange_card_page/exchange_page.html')