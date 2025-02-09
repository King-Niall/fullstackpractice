import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({
  id,
  author = "",
  title = "",
  content = "",
  onDelete,
}) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      if (onDelete) {
        onDelete(id);
      }
    }
  };

  return (
    <div className="post">
      <div className="user">
        <span>

        <div className="fakeimg">A</div>
        <h3 className="author">{author}</h3>
        </span>
        <div className="actions">
        <Link to={`/edit/${id}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button onClick={handleDelete} className="btn btn-delete">
          Delete
        </button>
      </div>
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>

    </div>
  );
}
