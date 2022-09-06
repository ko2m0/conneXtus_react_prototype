import { useState } from 'react';
import axios from "axios";
import { FormContainer, FormAlert, ErrorMessage } from "./FormElements";

function MeetingForm({ currentProfessional, setShow }) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const valid = validateInputs()
      if (!valid) {
        setError("Invalid values");
        return
      }

      const response = await axios.post('http://localhost:8000/meeting', {
        ...inputs,
        user_id: currentProfessional.user_id,
        prof_firstname: currentProfessional.first_name,
        prof_email: currentProfessional.email
      })

      if(response.status === 201) {
        setSuccess(true)
        setTimeout(() => {
          setShow(false)
        }, 1300);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const validateInputs = () => {
    let valid = Object.entries(inputs).every( item => item.length > 0)

    return valid;
  };

  return (
    <>
      <FormContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name: *
            <input
              type="text"
              name="user_name"
              value={inputs.user_name || ""}
              onChange={handleChange}
            />
            <FormAlert>an alert</FormAlert>
          </label>
          <label>
            Enter your phone number: *
            <input
              type="number"
              name="phone_number"
              value={inputs.phone_number || ""}
              onChange={handleChange}
            />
            <FormAlert>an alert</FormAlert>
          </label>
          <label>
            Enter your e-mail: *
            <input
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <FormAlert>an alert</FormAlert>
          </label>
          <label>
            Set the date & time of meeting:
            <input
              type="date"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
            />
            <FormAlert>an alert</FormAlert>
          </label>
          <input type="submit" value="submit info" className={success ? 'btn-success' : ''} />
        </form>
      </FormContainer>
    </>
  );
}

export default MeetingForm;
