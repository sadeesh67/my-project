import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
  await axios.post("https://my-backend-cze2.onrender.com/api/auth/register", {
  email,
  password,
});
      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div style={{ background: '#FFFF99', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: 30, borderRadius: 20, width: 400 }}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: 10, marginBottom: 10 }} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: 10, marginBottom: 10 }} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: '#FFD700', border: 'none' }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
