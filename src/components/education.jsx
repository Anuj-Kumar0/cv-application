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

export function Education({data, setData}) {
  const [showForm, setShowForm] = useState(false);
  const [localData, setLocalData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    cgpa: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setData(prev => [...prev, localData]);

    setLocalData({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      cgpa: ''
    });
    
  }
  

  function handleChange(e) {
    const targ = e.target;
    setLocalData({
      ...localData,
      [targ.name]: targ.value
    });
  }

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Education</button>

      {showForm && (
        <div className="overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <h2>Add Education</h2>

              <Input
                label="School/University Name"
                type="text"
                placeholder="Enter school/university"
                name="school"
                onChange={handleChange}
                required
              />

              <Input
                label="Degree"
                type="text"
                placeholder="Enter degree"
                name="degree"
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
                label="CGPA"
                type="number"
                placeholder="Enter CGPA"
                name="cgpa"
                onChange={handleChange}
                min="0"
                max="10"
                step="0.01"
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
