import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername]   = useState('');
  const [password, setPassword]   = useState('');
  const [error, setError]         = useState('');
  const [success, setSuccess]     = useState('');
  const [loading, setLoading]     = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:8000/api/accounts/register/', {
        username: username.trim(),
        password,
      });
      console.log(response.data);
      setSuccess('Registration successful! You can now log in.');
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.errors
        ? JSON.stringify(err.response.data.errors)
        : 'Please try again.';
      setError('Registration failed. ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="post-form">
        <h2 style={{ textAlign: 'center', color: 'wheat' }}>Register</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input 
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input 
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {success && (
        <p style={{ color: 'green', textAlign: 'center' }}>
          {success} <Link to="/login">Click here to log in</Link>
        </p>
      )}
      <p style={{ textAlign: 'center', color: 'wheat' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
