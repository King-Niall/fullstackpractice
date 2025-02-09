import React, { useState, useEffect } from 'react';

export default function PostForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        author: initialData.author || '',
        title: initialData.title || '',
        content: initialData.content || '',
      });
    } else {
      // Reset to default empty values when no initialData is provided.
      setFormData({
        author: '',
        title: '',
        content: '',
      });
    }
  }, [initialData]);
  
  
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
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
      Save Post
    </button>
    {onCancel && (
      <button type="button" onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    )}
  </form>
  );
}
