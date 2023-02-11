from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

from djangoapp.models import Rules

@api_view(['GET'])
@permission_classes([])
def get_constants(request):
    return Response({
      'dataDimensions': dict(Rules.DATA_DIM_CHOICES)
    }, status=status.HTTP_200_OK)
