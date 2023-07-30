import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for Login form styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform the login logic with the entered username and password
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your login logic here (e.g., make an API call to validate credentials)
  };

  const handleSSOLogin = () => {
    // Placeholder function for SSO login logic
    console.log('Sign in with SSO clicked');
    // Implement your SSO login logic here
  };

  return (
    <div className='login-container'>
      <h2>Padayon!</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>UP Mail:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
        <button type='button' onClick={handleSSOLogin} className='sso-button'>
          Sign in with UP MAIL
        </button>
      </form>
    </div>
  );
}

export default Login;
