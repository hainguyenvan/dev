from rest_framework import serializers

from ..models import PermissionModel
from ...role.models import RoleModel


class PermissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = PermissionModel
        fields = ('id', 'name', 'service')
