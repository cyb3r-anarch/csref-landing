import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import WaitlistModal from './WaitlistModal';

interface WaitlistBtnProps {
  curTheme: string;
}

function WaitlistBtn({ curTheme }: WaitlistBtnProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
        Join Waitlist
      </button>
      {showModal && createPortal(
        <WaitlistModal onClose={() => setShowModal(false)} curTheme={curTheme} />,
        document.body
      )}
    </>
  );
}

export default WaitlistBtn;
