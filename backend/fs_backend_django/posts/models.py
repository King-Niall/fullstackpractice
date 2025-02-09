from django.db import models

# Create your models here.
class Post(models.Model):
    author = models.CharField(max_length=40)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title