from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'timer_app/index.html')


def chess_timer(request):
    return render(request, 'timer_app/set-timer.html')


