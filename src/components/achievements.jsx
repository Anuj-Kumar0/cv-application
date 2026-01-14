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

export function Achievements({data, setData}) {
  const [showForm, setShowForm] = useState(false);
  const [localData, setLocalData] = useState({
    achievement: '',
    award: ''   
  });

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setData(prev => [...prev, localData]);

    setLocalData({
        achievement: '',
    award: ''     
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
      <button onClick={() => setShowForm(true)}>Add Achievements & Awards</button>

      {data.length > 0 && (
        <>
        <h2>Achievements & Awards</h2>
        <div className="achievements-list">
          {data.map((achieve, index) => (
            <div key={index} className="skill-item">
              <p><strong>Achievements: {achieve.achievement}</strong></p>
              <p>Awards: {achieve.award}</p>

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
                label="Achievements"
                type="text"
                placeholder="Eg. Top 1% Leetcode"
                name="achievement"
                onChange={handleChange}
              />

              <Input
                label="Awards"
                type="text"
                placeholder="Eg. Top 1% IQ student"
                name="award"
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
