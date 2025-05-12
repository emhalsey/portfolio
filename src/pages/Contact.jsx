import LinkedIn from "../photos/linkedin.png"
import GitHub from "../photos/github.png"
import Tableau from "../photos/tableau.png"
import Email from "../photos/email.png"
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email me at: emma.m.halsey@gmail.com</p>
      <div>
        <a href="https://linkedin.com/in/emhalsey" target="_blank">
        {/* opens linkedin in a new page */}
          <img src={LinkedIn} className="logo linkedin" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/emhalsey" target="_blank">
          <img src={GitHub} className="logo github" alt="GitHub logo" />
        </a>
        <a href="https://public.tableau.com/app/profile/emma.halsey/vizzes" target="_blank">
          <img src={Tableau} className="logo tableau" alt="Tableau logo" />
        </a>
        <a href="mailto:emma.m.halsey@gmail.com" target="_blank">
          <img src={Email} className="logo email" alt="Email icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
