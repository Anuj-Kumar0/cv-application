import React from "react";
import '../styles/personal.css'

export function Personal({ data, setData }) {
  function handleChange(e) {
    const targ = e.target;
    setData({
      ...data,
      [targ.name]: targ.value
    });
  }

  return (
    <div className="personal-form">
      <h2>Personal Details</h2>
      <div className="form-row">
        <Input
          name="fullName"
          label="Full Name"
          value={data.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>
      <div className="form-row">
        <Input
          name="email"
          label="Email"
          value={data.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
        <Input
          name="contact"
          label="Contact"
          value={data.contact}
          onChange={handleChange}
          placeholder="+1 234 567 890"
        />
      </div>
      <div className="form-row">
        <Input
          name="location"
          label="Location"
          value={data.location}
          onChange={handleChange}
          placeholder="City, Country"
        />
        <Input
          name="github"
          label="GitHub"
          value={data.github}
          onChange={handleChange}
          placeholder="github.com/username"
        />
      </div>
    </div>
  );
}


function Input({ label, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} {' '}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
}
