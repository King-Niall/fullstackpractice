import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(res => {
        setPosts(res.data);
        console.log('Response data:', res.data); // Debug log
      })
      .catch(console.error);
  }, []);

  const deletePost = (postId) => {
    axios.delete(`http://localhost:8000/api/posts/${postId}/`)
      .then(() => {
        // Update the state to remove the deleted post
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div className="posts">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            content={post.content}
            onDelete={deletePost}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
