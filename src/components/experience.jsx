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

export function Experience({data, setData}) {
  const [showForm, setShowForm] = useState(false);
  const [localData, setLocalData] = useState({
    company: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    jobDescription: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setData(prev => [...prev, localData]);

    setLocalData({
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        jobDescription: ''
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
      <button onClick={() => setShowForm(true)}>Add Experience</button>

      {data.length > 0 && (
        <div className="experience-list">
          {data.map((exp, index) => (
            <div key={index} className="experience-item">
              <p><strong>{exp.company}</strong></p>
              <p>{exp.jobTitle}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
              <p>Job Description: {exp.jobDescription}</p>

              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <h2>Add Experience</h2>

              <Input
                label="Company Name"
                type="text"
                placeholder="Eg. Google, Amazon"
                name="company"
                onChange={handleChange}
                required
              />

              <Input
                label="Job Title"
                type="text"
                placeholder="Eg. Software Engineer"
                name="jobTitle"
                onChange={handleChange}
                required
              />

              <div className="date-fields">
                <Input
                  label="Start Date"
                  type="date"
                  placeholder="Start Date"
                  name="startDate"
                  onChange={handleChange}
                  required
                />
                <Input
                  label="End Date"
                  type="date"
                  placeholder="End Date"
                  name="endDate"
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                label="Job Description"
                type="text"
                placeholder="Enter About Your Job"
                name="jobDescription"
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
