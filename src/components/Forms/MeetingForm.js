import { useState } from 'react';
import axios from "axios";
import { FaCheck, FaCross, FaExclamationTriangle, FaXing } from 'react-icons/fa';
import { FormContainer, FormAlert, FormFlex, ErrorMessage, FormSuccess, FormFail } from "./FormElements";

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
        <FormFlex>
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
            Enter your phone number: 
            <input
              type="number"
              name="phone_number"
              value={inputs.phone_number || ""}
              onChange={handleChange}
            />
            <FormAlert>an alert</FormAlert>
          </label>
          
          <label>
            Set the date & time of meeting:
            <input
              type="datetime-local"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
            />
            <FormAlert>an alert</FormAlert>
          </label>
          <input type="submit" value="submit info" className={success ? 'btn-success' : ''} />
         <FormSuccess>
            <FaCheck/>
            <span>The information has been successfully submitted!</span>
          </FormSuccess>
          <FormFail>
            <FaExclamationTriangle/>
            <span>There is an error on your form, please try again.</span>
          </FormFail> 
        </form>
        </FormFlex>
        
      </FormContainer>
    </>
  );
}

export default MeetingForm;
