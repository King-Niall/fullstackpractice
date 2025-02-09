import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const fetchPostById = async (id) => {
  return {
    author: '',
    title: '',
    content: '...',
  };
};

const createPost = async (postData) => {
  console.log('Creating:', postData);
};

const updatePost = async (id, postData) => {
  console.log(`Updating ${id}:`, postData);
};

function CreatePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    if (isEditing) {
      fetchPostById(id)
        .then((data) => setFormData(data))
        .catch((error) => console.error('Error fetching post:', error));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updatePost(id, formData)
        .then(() => navigate('/'))
        .catch((error) => console.error('Error updating post:', error));
    } else {
      createPost(formData)
        .then(() => navigate('/'))
        .catch((error) => console.error('Error creating post:', error));
    }
  };

  return (
    <div className="create-post-container">
      <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label className="form-label">
            Author:
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Title:
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Content:
            <textarea
              name="content"
              placeholder="Content"
              value={formData.content}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Post' : 'Save Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
