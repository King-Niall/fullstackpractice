// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
  const { id } = useParams(); // Get the post ID from the URL.
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

  return (
    <div className="post-detail">
      <Link to="/">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <div className="full-content">{post.content}</div>
    </div>
  );
}
