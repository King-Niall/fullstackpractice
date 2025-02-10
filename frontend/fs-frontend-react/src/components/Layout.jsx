import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../Layout.css';

const Layout = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      navigate('/');
      return;
    }
    setLoading(true);
    navigate(`/?q=${encodeURIComponent(query)}`);
    setLoading(false);
  };



  return (
    <div className="layout">
      <header>
        <div className="logo">
          <h1>Postings</h1>
        </div>
        <nav>
          <ul className="nav-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" disabled={loading} className="btn btn-primary">
              {loading ? 'Searching...' : 'Search'}
            </button>
    
          </form>
          <ul className="nav-right">
            <li>
              <Link to="/create">New Post</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>My Postings React App</p>
      </footer>
    </div>
  );
};

export default Layout;
