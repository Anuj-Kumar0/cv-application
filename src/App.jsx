import { useState } from 'react'
import './App.css'
import './styles/navbar.css'
import './styles/form.css'
import './styles/preview.css'
import './styles/detail.css'
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
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [achievementData, setAchievementData] = useState([]);
 
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

      {activeSection === 'experience' && <Experience data={experienceData} setData={setExperienceData} />}
      {activeSection === 'education' && <Education data={educationData} setData={setEducationData} />}
      {activeSection === 'skills' && <Skills data={skillsData} setData={setSkillsData} />}
      {activeSection === 'projects' && <Projects data={projectData} setData={setProjectData} />}
      {activeSection === 'achievements' && <Achievements data={achievementData} setData={setAchievementData} />}
      </div>

      <div className='preview'>
      <p>{personalData.fullName}</p>
      <p>{personalData.email}</p>
      <p>{personalData.contact}</p>
      <p>{personalData.location}</p>
      <p><a href={personalData.github}>{personalData.github}</a></p>

      {educationData.length > 0 && (
        <>
        <h2>Education</h2>
         {educationData.map((edu, index) => (
  <div key={index}>
    <p>{edu.school}</p>
    <p>{edu.degree}</p>
    <p>{edu.startDate} - {edu.endDate}</p>
    <p>{edu.cgpa}</p>
  </div>
         ))}
  </>
      )}

     
      {experienceData.length > 0 && (
        <>
        <h2>Experience</h2>
      {experienceData.map((exp, index) => (
  <div key={index}>
    <p>{exp.company}</p>
    <p>{exp.jobTitle}</p>
    <p>{exp.startDate} - {exp.endDate}</p>
    <p>{exp.jobDescription}</p>
  </div>
      ))}
  </>
      )}


{skillsData.length > 0 && (
  <>
    <h2>Skills & Certifications</h2>
    {skillsData.map((skill, index) => (
      <div key={index}>
        <p><strong>{skill.skills}</strong></p>
        <p>{skill.certificates}</p>
        <p>{skill.technology}</p>
        <p>{skill.languages}</p>
      </div>
    ))}
  </>
)}

{projectData.length > 0 && (
  <>
    <h2>Technical Projects</h2>
    {projectData.map((project, index) => (
      <div key={index}>
        <p><strong>{project.name}</strong></p>
        <p>{project.description}</p>
        <p><a href={project.link} target="_blank" rel="noopener noreferrer">
  {project.link}
</a></p>

      </div>
    ))}
  </>
)}

{achievementData.length > 0 && (
  <>
    <h2>Achievements & Awards</h2>
    {achievementData.map((achieve, index) => (
      <div key={index}>
        <p><strong>{achieve.achievement}</strong></p>
        <p>{achieve.award}</p>

      </div>
    ))}
  </>
)}
      </div>
      
    </div>

    <div className="buttons">
      <button onClick={() => window.print()}>Print</button>
    </div>

   </div>
  )
}

export default App
