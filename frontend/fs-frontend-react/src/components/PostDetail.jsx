import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <Link to="/">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <div className="full-content">{post.content}</div>
    </div>
  );
};

export default PostDetail;
