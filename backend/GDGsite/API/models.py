from django.db import models

class courses(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    url = models.URLField()
    img = models.ImageField()
    def __str__(self):
        return self.title

class FAQ(models.Model):
    course = models.ForeignKey(courses, related_name='faq' ,on_delete=models.CASCADE)
    q = models.TextField()
    a = models.TextField()

class Article(models.Model):
    title = models.CharField(max_length=255)
    article = models.TextField()
    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=255)
    article = models.TextField()
    image = models.ImageField()  #markdown
    def __str__(self):
        return self.title

class image(models.Model):
    name = models.CharField(max_length=255)
    file = models.ImageField(upload_to='uploads/')

    @property
    def url(self):
        return self.file.url