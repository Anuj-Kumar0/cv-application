import { useState } from 'react'
import './App.css'
import './styles/navbar.css'
import './styles/education.css'
import { Personal } from './components/personal.jsx';
import { Experience } from './components/experience.jsx';
import { Education } from './components/education.jsx';
import { Skills } from './components/skills.jsx';
import { Projects } from './components/projects.jsx';
import { Achievements } from './components/achievements.jsx';

function App() {

  const [activeSection, setActiveSection] = useState('personal');
  const [personalData, setPersonalData] = useState({
    fullName: '',
    email: '',
    contact: '',
    location: '',
    github: '',
  });
  const [educationData, setEducationData] = useState([]);

 
  return (
   <div className='container'>

    <nav><ul className="nav-list">
    <li onClick={() => setActiveSection('personal')}>Personal Details</li>
    <li onClick={() => setActiveSection('experience')}>Work Experience</li>
    <li onClick={() => setActiveSection('education')}>Education</li>
    <li onClick={() => setActiveSection('skills')}>Skills & Certifications</li>
    <li onClick={() => setActiveSection('projects')}>Technical Projects</li>
    <li onClick={() => setActiveSection('achievements')}>Achievements & Awards</li>
    </ul></nav>

    <div className="data-containers">
      <div className='detail'>
      {activeSection === 'personal' && <Personal data={personalData} setData={setPersonalData} />}

      {activeSection === 'experience' && <Experience />}
      {activeSection === 'education' && <Education data={educationData} setData={setEducationData} />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'achievements' && <Achievements />}
      </div>

      <div className='preview'>
      <h3>Preview</h3>
      <p>{personalData.fullName}</p>
      <p>{personalData.email}</p>
      <p>{personalData.contact}</p>
      <p>{personalData.location}</p>
      <p>{personalData.github}</p>

      {educationData.map((edu, index) => (
  <div key={index}>
    <p>{edu.school}</p>
    <p>{edu.degree}</p>
    <p>{edu.startDate} - {edu.endDate}</p>
    <p>{edu.cgpa}</p>
  </div>
))}
      </div>
      
    </div>

    <div className="buttons">
      <button onClick={() => window.print()}>Print</button>
    </div>

   </div>
  )
}

export default App
