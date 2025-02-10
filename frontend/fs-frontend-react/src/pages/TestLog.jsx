import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TestLog() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Please log in.');
      setLoading(false);
      return;
    }

    axios
      .get('http://localhost:8000/api/accounts/check/', {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error verifying login:', err);
        setError('Error verifying login. Please check your token or log in again.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Verifying login...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>User Login Verification</h2>
      <p>User is logged in as: {userData.username}</p>
    </div>
  );
}
