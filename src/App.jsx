import { useState } from 'react'
import LinkedIn from "./assets/linkedin.png"
import GitHub from "./assets/github.png"
import Email from "./assets/email.png"
import './App.css'

function App() {

  return (
    <>
      <h1>Emma Halsey</h1>
      <div className="card">
        <p>
          Data Engineeering, Project Management, and Operations
        </p>
      </div>
      <div>
        <a href="https://linkedin.com/in/emhalsey" target="_blank">
        {/* opens linkedin in a new page */}
          <img src={LinkedIn} className="logo linkedin" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/emhalsey" target="_blank">
          <img src={GitHub} className="logo github" alt="GitHub logo" />
        </a>
        <a href="mailto:emma.m.halsey@gmail.com" target="_blank">
          <img src={Email} className="logo email" alt="Email icon" />
          <span class="logo email tooltiptext">emma.m.halsey@gmail.com</span>
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </div>
      
    </>
  )
}


export default App
