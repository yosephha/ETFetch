import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (clearErrors) => (
  <nav className="login-signup">
    <Link to="/login" onClick={clearErrors}>Login</Link>
    <Link to="/signup" onClick={clearErrors}>Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
<div className='top-header'>
  <div className="logo">
      <span>ETFetch</span>
  </div>
  <div>
    <p className='user-info'>
      You're logged in as <span>{' ' + currentUser.username}</span>
  </p>
  <button className="header-button" onClick={logout}>Log Out</button>
  </div>
</div>
);

const Greeting = ({ currentUser, logout, clearErrors }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)
);

export default Greeting;
