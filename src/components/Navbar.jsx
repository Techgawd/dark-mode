import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js';
import {Link} from 'react-router-dom';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle"
          onClick={toggleMode}>
        <div className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar; 

