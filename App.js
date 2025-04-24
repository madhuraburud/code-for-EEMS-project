import React, { useState } from 'react';
import Login from './Login';
import Register  from './Register';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="App">
      {isRegistered ? (
        <>
          <Login />
          <p>Don't have an account? <button onClick={() => setIsRegistered(false)}>Register</button></p>
        </>
      ) : (
        <>
          <Register />
          <p>Already have an account? <button onClick={() => setIsRegistered(true)}>Login</button></p>
        </>
      )}
    </div>
  );
}

export default App;
