from rest_framework import serializers
from djangoapp.models import Rules, DataOwner

class DataOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataOwner
        fields = ['name']


class RulesSerializer(serializers.ModelSerializer):
    data_owner = DataOwnerSerializer()
    
    class Meta:
        model = Rules
        fields = ['name', 'description', 'source', 'data_dimension', 'status', 'data_owner', 'creation_date', 'update_date', 'suspension_date']
