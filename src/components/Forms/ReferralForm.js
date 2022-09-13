import { useState } from 'react';
import axios from "axios";
import { FormContainer, FormAlert, FormFlex, ErrorMessage, FormSuccess, FormFail } from './FormElements'
import { FaCheck, FaExclamationTriangle } from 'react-icons/fa'; 

function ReferralForm({ currentProfessional, setShow }) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const valid = validateInputs()
      if (!valid) {
        setError("Invalid values");
        return
      }

      const response = await axios.post('http://localhost:8000/referral', {
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
      <label>Enter Referral name: *
      <input 
        type="text" 
        name="referral_name" 
        value={inputs.referral_name || ""} 
        onChange={handleChange}
      />
      <FormAlert>an alert</FormAlert>
      </label>
        <label>Enter Referral e-mail: *
        <input 
          type="email" 
          name="referral_email" 
          value={inputs.referral_email || ""} 
          onChange={handleChange}
        />
        <FormAlert>an alert</FormAlert>
        </label>
        <label>Referral from:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        <FormAlert>an alert</FormAlert>
        </label>
        {!success && <input type="submit" value="submit info" />}
        {success && <input type="submit" value="submit info" className="btn-success" />}
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
  )
}

export default ReferralForm;


