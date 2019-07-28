from rest_framework import serializers

from ..models import RoleModel
from ...permission.models import PermissionModel
from ...permission.serializers.permission import PermissionSerializer


class RoleSerializer(serializers.ModelSerializer):
    permissions = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PermissionModel.objects.all())

    class Meta:
        model = RoleModel
        fields = ('id', 'name', 'permissions')
