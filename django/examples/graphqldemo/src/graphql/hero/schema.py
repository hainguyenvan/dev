import graphene

from .query import Query
from .mutation import Mutation

heroschema = graphene.Schema(query=Query, mutation=Mutation)
