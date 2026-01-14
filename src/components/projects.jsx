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

export function Projects({data, setData}) {
  const [showForm, setShowForm] = useState(false);
  const [localData, setLocalData] = useState({
    name: '',
    description: '',
    link: '',
   
  });

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setData(prev => [...prev, localData]);

    setLocalData({
        name: '',
        description: '',
        link: '',    
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
      <button onClick={() => setShowForm(true)}>Add Projects</button>

      {data.length > 0 && (
        <>
        <h2>Technical Projects</h2>
        <div className="projects-list">
          {data.map((project, index) => (
            <div key={index} className="skill-item">
              <p><strong>Skills: {project.name}</strong></p>
              <p>Certificates: {project.description}</p>
              <p>Technology: {project.link}</p>


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
              <h2>Add Project</h2>

              <Input
                label="Name"
                type="text"
                placeholder="Eg. project name"
                name="name"
                onChange={handleChange}
                required
              />

              <Input
                label="Project Description"
                type="text"
                placeholder="Eg. This project does..."
                name="description"
                onChange={handleChange}
                required
                
              />

                <Input
                  label="Project Link"
                  type="url"
                  placeholder="Eg. Github link"
                  name="link"
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
