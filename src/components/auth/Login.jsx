import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="bg-[#1f1f1f] border border-emerald-400 shadow-xl rounded-2xl p-10 w-full max-w-md backdrop-blur-lg">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center tracking-wide">
          Welcome Back 👋
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-xl bg-transparent border border-emerald-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 rounded-xl bg-transparent border border-emerald-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-3 rounded-xl transition text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
