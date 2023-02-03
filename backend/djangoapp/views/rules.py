from rest_framework import viewsets

from djangoapp.models import Rules
from djangoapp.serializers.rules import RulesSerializer


# ViewSets define the view behavior.
class RulesViewSet(viewsets.ModelViewSet):
    queryset = Rules.objects.all()
    serializer_class = RulesSerializer