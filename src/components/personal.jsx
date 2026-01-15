export function Personal({ data, setData }) {
    function handleChange(e) {
      const targ = e.target;
      setData({
        ...data,
        [targ.name]: targ.value
      });
    }
  
    return (
      <>
        <h2>Personal Details</h2>
  
        <Input name="fullName" label="Full Name" value={data.fullName} onChange={handleChange} />
        <Input name="email" label="Email" value={data.email} onChange={handleChange} />
        <Input name="contact" label="Contact" value={data.contact} onChange={handleChange} />
        <Input name="location" label="Location" value={data.location} onChange={handleChange} />
        <Input name="github" label="Github" value={data.github} onChange={handleChange} />
      </>
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
  