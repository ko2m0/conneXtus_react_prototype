import { useState } from 'react';
import { FormContainer, FormAlert, ErrorMessage } from './FormElements'

function MeetingForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <>
    <FormContainer>
        <ErrorMessage>Im an error message</ErrorMessage>
    <form onSubmit={handleSubmit}>
      <label>Enter your name: *
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <FormAlert>an alert</FormAlert>
      </label>
      <label>Enter your phone number: *
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <FormAlert>an alert</FormAlert>
        </label>
        <label>Enter your e-mail: *
        <input 
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <FormAlert>an alert</FormAlert>
        </label>
        <label>Set the date & time of meeting:
        <input 
          type="date" 
          name="" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <FormAlert>an alert</FormAlert>
        </label>
        <input type="submit" value="submit info" />
    </form>
    </FormContainer>
    </>
  )
}

export default MeetingForm;


