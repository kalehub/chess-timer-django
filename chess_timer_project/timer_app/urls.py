from django.urls import path
from . import views

urlpatterns = [
        path('', views.index, name='index'),
        path('timer-chess/', views.chess_timer, name='chess_timer'),
        ]





