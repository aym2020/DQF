from rest_framework import routers
from django.urls import path

from djangoapp.views import RulesViewSet
from djangoapp.views.config import get_constants


router = routers.DefaultRouter()
router.register(r'rules', RulesViewSet)

urlpatterns = [
  path('constants/', get_constants, name='constant')
]