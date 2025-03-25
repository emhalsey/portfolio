import { useState } from 'react'
import LinkedIn from "./assets/linkedin.png"
import GitHub from "./assets/github.png"
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://linkedin.com/in/emhalsey" target="_blank">
        {/* opens linkedin in a new page */}
          <img src={LinkedIn} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/emhalsey" target="_blank">
          <img src={GitHub} className="logo react" alt="GitHub logo" />
        </a>
      </div>
      <h1>Emma Halsey</h1>
      <div className="card">
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <br></br>
        <br></br>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <br></br>
        <br></br>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}


export default App
