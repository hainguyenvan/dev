from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers

from .models import Author
from .serializers import AuthorSerializer
from ..utils.utils import utils

class AuthorView(APIView):

    def get(self, request):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        res = {
            'status': 200,
            'msg': 'successfully',
            'data': serializer.data
        }
        return Response(res)

    def post(self, request, format=None):
        serializer =  AuthorSerializer(data=request.data)
        try:
            if serializer.is_valid():
                serializer.save()
                res = {
                    'status': status.HTTP_201_CREATED,
                    'msg': 'successfully',
                    'data': serializer.data
                }
                return Response(res)
            res =  {
                'status': status.HTTP_400_BAD_REQUEST,
                'msg': serializer.errors
            }
            return Response(res)
        except Exception as err:
            res =  {
                'status': status.HTTP_400_BAD_REQUEST,
                'msg': str(err)
            }
            return Response(res)

    def put(self,req, id):
        try:
            body = req.data
            saved_author = Author.objects.get(id=id)
            data =  utils.convert_obj_to_serializers(saved_author)
            print('email', saved_author.email)
            # print('saved author: ', data)
            serializer = AuthorSerializer(instance=saved_author, data=body,  partial=True)
            if serializer.is_valid(raise_exception=True):
                saved_author = serializer.save()
                res = {
                    'status': 200,
                    'msg':'successfully',
                    'data': saved_author
                }
                return Response(res)
            res =  {
                'status': status.HTTP_400_BAD_REQUEST,
                'msg': serializer.errors
            }
            return Response(res)
        except  Exception as err:
            res = {
                'status': status.HTTP_400_BAD_REQUEST,
                'msg': str(err)
            }
            return Response(res)