from django.urls import path
from . import views

urlpatterns = [
        path('', views.index, name='index'),
        path('set-timer', views.chess_timer, name='chess_timer'),
        ]





