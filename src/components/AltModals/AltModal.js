import React from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

export const AltModal = ({children, show, setShow, modalTitle}) => {
  return (
    <>
    {show && 
    <Overlay>
        <ModalContainer>
            <ModalHeader>
               <h3 className='duocolor-txt'>{modalTitle}</h3> 
            </ModalHeader>
            <ModalCloseBtn onClick={() => setShow(false)}>
                <MdClose/>
            </ModalCloseBtn>
            {children}
        </ModalContainer>
    </Overlay>
    }
    </>
  )
}



const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(1, 68, 121, 0.8);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalContainer = styled.div`
    width: 90vw;
    min-height: 55vh;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;  
`

const ModalHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom; 20px;
padding: 10px 0;
border-bottom: 1px solid #014479;

h4 {
    font-weight: bold;
    font-size: 18px;
    color: #000
}
`

const ModalCloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    padding: 5px;
    transition: .3s ease all;

&:active {
    background-color: #000;
}
`

export const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`