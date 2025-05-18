import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5299/api/user";

function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    title: "",
  });

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/getAll`);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/add`, form);
      setMessage("User added successfully!");
      setForm({ name: "", email: "", contact: "", title: "" });
      fetchUsers();
    } catch (err) {
      setMessage("Failed to add user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br />
        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required />
        <br />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>

      <h3>All Users</h3>
      <ul>
        {users.length === 0 ? (
          <li>No users yet.</li>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.contact} - {user.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UserForm;
