import React, { useState } from 'react';
import './components_css/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰ Menu
      </button>
      {isOpen && (
        <div className="nav-panel">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;