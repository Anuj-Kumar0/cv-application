import React, { useState } from "react";

function Input({ label, type, placeholder, name, onChange, ...props }) {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...props}
        onChange={onChange}
      />
    </label>
  );
}

export function Skills({data, setData}) {
  const [showForm, setShowForm] = useState(false);
  const [localData, setLocalData] = useState({
    skills: '',
    certicates: '',
    technology: '',
    languages: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setData(prev => [...prev, localData]);

    setLocalData({
        skills: '',
        certicates: '',
        technology: '',
        languages: ''
    });
    
  }
  

  function handleChange(e) {
    const targ = e.target;
    setLocalData({
      ...localData,
      [targ.name]: targ.value
    });
  }

  
  function handleDelete(index) {
    setData(prev => prev.filter((currItem, currIndex) => currIndex !== index));
  }


  return (
    <div>
      {data.length === 0 && (
  <button onClick={() => setShowForm(true)}>
    Add Skills & Certifications
  </button>
)}

      {data.length > 0 && (
        <>
        <h2>Skills & Certifications</h2>
        <div className="skills-list">
          {data.map((skill, index) => (
            <div key={index} className="skill-item">
              <p><strong>Skills: {skill.skills}</strong></p>
              <p>Certificates: {skill.certificates}</p>
              <p>Technology: {skill.technology}</p>
               <p>Languages: {skill.languages}</p>

              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        </>
      )}

      {showForm && (
        <div className="overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <h2>Add Skills & Certifications</h2>

              <Input
                label="Skills"
                type="text"
                placeholder="Eg. Excellent Communication Skills"
                name="skills"
                onChange={handleChange}
                required
              />

              <Input
                label="Certificates"
                type="text"
                placeholder="Eg. Udemy React Certificate"
                name="certificates"
                onChange={handleChange}
                
              />

                <Input
                  label="Technology"
                  type="text"
                  placeholder="Eg. Docker, Git"
                  name="technology"
                  onChange={handleChange}
                  
                />
                <Input
                  label="Languages"
                  type="text"
                  placeholder="Eg. Javascript, Java"
                  name="languages"
                  onChange={handleChange}
                  
                />

              <button type="submit" className="submit-btn">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
