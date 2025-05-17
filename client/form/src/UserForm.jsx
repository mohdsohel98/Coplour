import React, { useState, useEffect } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    title: ''
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5052/api/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to add user');

      setMessage('User added successfully');
      fetchUsers(); // refresh list
    } catch (error) {
      setMessage('Failed to add user');
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5052/api/user/getAll');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="contact" placeholder="Contact" onChange={handleChange} required />
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.fullName} - {user.email} - {user.contact} - {user.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserForm;
