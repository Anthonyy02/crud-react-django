from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all() #Trae todos los datos del models y del Task
