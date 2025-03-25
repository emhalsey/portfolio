import { useState } from 'react'
import LinkedIn from "./assets/linkedin.png"
import GitHub from "./assets/github.png"
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
