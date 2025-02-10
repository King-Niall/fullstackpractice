import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PostList from '../components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const fetchPosts = (query) => {
    let url = 'http://localhost:8000/api/posts/';
    if (query && query.trim() !== '') {
      url = `http://localhost:8000/api/posts/search/?q=${encodeURIComponent(query)}`;
    }
    axios.get(url)
      .then((res) => {
        setPosts(res.data);
        console.log('Response data:', res.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchPosts(query);
  }, [query]);

  const deletePost = (postId) => {
    axios.delete(`http://localhost:8000/api/posts/${postId}/`)
      .then(() => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  return (
    <div className="home">
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}
