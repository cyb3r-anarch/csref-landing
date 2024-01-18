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

  return (
    <>
      <button onClick={openModal} className="bg-sky-600 hover:bg-cyan-700 text-white font-bold text-xl py-2 px-4 rounded-sm scale-up-bottom pulsate-fwd">
      {text}
      </button>
      {showModal && createPortal(
        <WaitlistModal onClose={() => setShowModal(false)} curTheme={curTheme} />,
        document.body
      )}
    </>
  );
}

export default WaitlistBtn;
