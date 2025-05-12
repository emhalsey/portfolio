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
          <table>
            <tr>
              <td><a href="#home">Home</a></td>
              <td><a href="#about">About</a></td>
              <td><a href="#projects">Projects</a></td>
              <td><a href="#contact">Contact</a></td>
            </tr>
          </table>
        </div>
      )}
    </nav>
  );
};

export default Navbar;