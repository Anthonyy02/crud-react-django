from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200) #char es para decir que es un texto, string
    description = models.TextField(blank=True) #Si no se le pasa nada, que lo guarde como vacio eso significa el blank
    done = models.BooleanField(default=False)  #Para saber si ya fue hecha la tarea

    def __str__(self):
        return self.title