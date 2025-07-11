import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.render.com/deploy/srv-d1oi0qvfte5s73bchhm0?key=3Jz-o7prxNM/api/auth/forgot-password", { email });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Something went wrong.");
    }
  };

  return (
    <div style={{ background: "#FFFFCC", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleForgotPassword} style={{ background: "#fff", padding: 30, borderRadius: 10 }}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>Send Reset Link</button>
        {message && <p style={{ marginTop: 10 }}>{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
