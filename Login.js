import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Fake login check
    
    if (email === 'user@example.com' && password === '123456') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <br /></div>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
