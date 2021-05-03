from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(max_length=200)
    time = models.TextField(max_length=200, null=True)
    category = models.TextField(max_length=200, null=True)

    def __str__(self):
        return self.title