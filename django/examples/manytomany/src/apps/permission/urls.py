from django.urls import path, include

from .views.permission import PermissionView

urlpatterns = [
    path('permission', PermissionView.as_view())
]
