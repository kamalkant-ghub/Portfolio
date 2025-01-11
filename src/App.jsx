// Portfolio App using React

import React from 'react';
import './style.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kamalkant Pareek</h1>
        <h2>Full Stack Blockchain Developer</h2>
        <p id="buttons">
          <a href="https://github.com/HitmanBoi"> GitHub</a> 
          <a href="https://in.linkedin.com/in/hitman24">LinkedIn</a>
          <a href="https://kamalkant-github-io.vercel.app/">3D Portfolio Website</a> 

          
        </p>
      </header>

      <section id="about">
        <h2>About</h2>
        <p>
          I am a B.Tech student specializing in Computer Science and Engineering, passionate about blockchain development and innovative technology solutions.
        </p>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Python</li>
          <li>HTML/CSS/JavaScript</li>
          <li>ReactJs</li>
          <li>MongoDB</li>
          <li>Artificial Intelligence / Data Science</li>
          <li>Internet Computer (ICP)</li>
        </ul>

        <h3>Tools & Services</h3>
        <ul>
          <li>Git/GitHub</li>
          <li>AWS</li>
          <li>IBM Cloud</li>
        </ul>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Internshala Blockchain Training</li>
          <li>IBM Cloud</li>
          <li>Quantum Computing</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Work Experience</h2>
        <div>
          <h3>CnM Infotech - Software Trainee</h3>
          <p>Developed projects and web apps using PHP/Laravel and Tailwind CSS.</p>
        </div>
        <div>
          <h3>CT University - Announcement Scheduler</h3>
          <p>Worked with a team to develop an Announcement Scheduler using Python.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>NFT Marketplace:</strong> A platform to buy, sell, and mint NFTs.</li>
          <li><strong>BS_Supply_Chain_Management:</strong> Blockchain-based Supply Chain Management system.</li>
          <li><strong>Medico_BS:</strong> A Blockchain System to enhance traditional medical services.</li>
          <li><strong>Muhurta_Converter_API:</strong> Converts English calendar time into Vaidik Muhurat System.</li>
          <li><strong>Photo Enhancer Camera Integration:</strong> Captures blink-free pictures.</li>
        </ul>
      </section>

      <section id="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>1st Rank in Technical Quiz at CT University (Engineers Day 2023).</li>
          <li>1st prize ($150) in Blockchain Theme Hackathon (Crewsphere: ICP India Hub).</li>
          <li>Participated in a National Level Hackathon organized by GDG.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: kamalkantpareek@example.com</p>
        <p>Phone: +91 9783848328</p>
      </section>
    </div>
  );
}