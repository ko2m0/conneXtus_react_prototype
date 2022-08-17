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
      <label>Enter Referral name: *
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <FormAlert>an alert</FormAlert>
      </label>
        <label>Enter Referral e-mail: *
        <input 
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <FormAlert>an alert</FormAlert>
        </label>
        <label>Referral from:
        <input 
          type="type" 
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


