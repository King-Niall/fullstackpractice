import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostDetail from '../components/PostDetail';

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post detail:", error);
        setError("Error fetching post detail.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading post...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>No post found.</div>;

  return <PostDetail post={post} />;
}
