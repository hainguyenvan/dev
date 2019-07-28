from django.urls import path, include

from .views.role import RoleView

urlpatterns = [
    path('role', RoleView.as_view())
]
