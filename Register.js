import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    console.log('Registering with:', { email, password });

    // Fake register logic
    alert('Registration successful! You can now log in.');
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
