from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post

class PostAPITests(APITestCase):
    def setUp(self):
        self.list_url = reverse('post-list')  # Provided by the router
        self.post_data = {'title': 'Test Post', 'content': 'This is a test.'}

    def test_create_post(self):
        response = self.client.post(self.list_url, self.post_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)

    def test_get_posts(self):
        Post.objects.create(**self.post_data)
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_update_post(self):
        post = Post.objects.create(**self.post_data)
        detail_url = reverse('post-detail', args=[post.id])
        updated_data = {'title': 'Updated Title', 'content': 'Updated content.'}
        response = self.client.put(detail_url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        post.refresh_from_db()
        self.assertEqual(post.title, updated_data['title'])
        self.assertEqual(post.content, updated_data['content'])

    def test_delete_post(self):
        post = Post.objects.create(**self.post_data)
        detail_url = reverse('post-detail', args=[post.id])
        response = self.client.delete(detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Post.objects.count(), 0)
