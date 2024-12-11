import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/invitation">Send Invitations</Link></li>
        <li><Link to="/PartyCustomization">Party Customization</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
