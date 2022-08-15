import React, { useRef, useEffect, useCallback }  from "react";
import { useSpring, animated } from 'react-spring';
import { ModalBg, ModalWrapper, ModalContent, CloseModalButton  } from "./ModalElements";


export const ModalMeeting = ({showModal, setShowModal }) => {
    
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 150
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };
    
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
          }
        },
        [setShowModal, showModal]
      );
    
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );


    
    return (
        <>
        {showModal ? (
            <ModalBg ref={modalRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                       <h2>Meeting</h2>
                       <p>content</p> 
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)}/>
                </ModalWrapper>
                </animated.div>
            </ModalBg>
        ) : null}
        </>

    );
            
};