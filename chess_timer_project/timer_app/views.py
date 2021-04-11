from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'timer_app/base.html')


def chess_timer(request):
    return HttpResponse('hello timer page!')


