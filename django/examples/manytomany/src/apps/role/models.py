from django.db import models
import calendar
import time
import uuid

from ..permission.models import PermissionModel


class RoleModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    time_created = models.BigIntegerField(
        default=calendar.timegm(time.gmtime()))
    time_modified = models.BigIntegerField(
        default=calendar.timegm(time.gmtime()))
    # created_by = models.CharField(blank=True, max_length=255)
    # modified_by = models.CharField(blank=True, max_length=255)

    # link table
    permissions = models.ManyToManyField(PermissionModel)

    class Meta:
        db_table = 'role'
