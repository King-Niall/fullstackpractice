// src/components/PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts, onDelete }) => {
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
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
