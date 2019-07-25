from django.urls import path, include
from . import views
from rest_framework import routers


# router = routers.DefaultRouter()
# router.register('author', views.AuthorView)

urlpatterns = [
    # path('', include(router.urls))
    path('v1/author', views.AuthorView.as_view()),
    path('v1/author/<str:id>', views.AuthorView.as_view()),
]
