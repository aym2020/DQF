from rest_framework import serializers

from djangoapp.models import Rules


# Serializers define the API representation.
class RulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rules
        fields = ['name']