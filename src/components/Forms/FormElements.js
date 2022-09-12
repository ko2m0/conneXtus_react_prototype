import styled from 'styled-components';

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 0;

label{
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    padding: 10px 0;
}

input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 100%;
    background-color: #014479;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    transition: 1s;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

`

export const FormAlert = styled.span`
  display: block;
  padding: 0;
  margin: 0;
  font-size: small;
  color: red;
`
export const ErrorMessage = styled.span`
font-size: small;
color: red;
font-weight: bold;
display: inline-block;
padding: 20px 10px;
border: 1px dashed red;
width: 100%;
`
export const FormSuccess = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center; 
text-align: center;
`
export const FormFail = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center; 
text-align: center;
`

