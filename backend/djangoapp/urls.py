from rest_framework import routers

from djangoapp.views.rules import RulesViewSet


router = routers.DefaultRouter()
router.register(r'rules', RulesViewSet)

urlpatterns = []