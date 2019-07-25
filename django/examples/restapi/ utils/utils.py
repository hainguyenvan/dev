 def convert_obj_to_serializers(obj):
     data = serializers.serialize('json', [obj,])
     struct = json.loads(data)
     data = json.dumps(struct[0])
     return data
