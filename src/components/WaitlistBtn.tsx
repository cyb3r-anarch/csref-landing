import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import WaitlistModal from './WaitlistModal';

interface WaitlistBtnProps {
  curTheme: string;
  text: string;
}


function WaitlistBtn({ curTheme , text }: WaitlistBtnProps) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    const modalElement = document.querySelector('.modal');

    if (!modalElement) {
      // If element with class 'modal' does not exist, show the modal
      setShowModal(true);
    }
    // Otherwise, do nothing (optional: show a message, log, etc.)
  };

  const closeSignUpModal = () => {
    const modal = document.getElementsByClassName('slit-in-vertical')[0]
    modal.classList.remove('slit-in-vertical')
    modal.classList.add('slit-out-vertical')
    setTimeout(() => {
      setShowModal(false);
    }, 600)
  }

  return (
    <>
      <button onClick={openModal} className="bg-sky-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-sm scale-up-bottom pulsate-fwd">
      {text}
      </button>
      {showModal && createPortal(
        <WaitlistModal onClose={() => closeSignUpModal()} curTheme={curTheme} />,
        document.body
      )}
    </>
  );
}

export default WaitlistBtn;
