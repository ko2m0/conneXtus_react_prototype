import React from "react";
import { ModalBg, ModalWrapper, ModalContent, CloseModalButton  } from "./ModalElements";


export const ModalReferral = ({showModal, setShowModal }) => {
    return (
        <>
        {showModal ? (
            <ModalBg>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                       <h2>Referral</h2>
                       <p>content</p> 
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)}/>
                </ModalWrapper>
            </ModalBg>
        ) : null}
        </>

    );
            
};