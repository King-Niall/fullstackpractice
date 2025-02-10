import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const navigate              = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/accounts/login/', {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials.');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="post-form">
        <h2 style={{ textAlign: 'center', color: 'wheat' }}>Login</h2>
        <div className="form-group">
          <label className="form-label">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <p style={{ textAlign: 'center', color: 'wheat' }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
