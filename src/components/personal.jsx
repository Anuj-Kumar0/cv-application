export function Personal({ data, setData }) {
    function handleChange(e) {
      setData({
        ...data,
        [e.target.name]: e.target.value
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
      <label>
        {label}
        {' '}
        <input
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }