import React from 'react'
import data from '../utils/data.json'

interface WaitlistModalProps {
    curTheme: string;
    onClose: () => void;
}

function WaitlistModal({ curTheme, onClose }: WaitlistModalProps ) {
    
    const themeObject = data.find(obj => obj[curTheme]);
    const text = themeObject[curTheme].waitlistModalText;


    return (
        <div className="modal">
          <h1>{text}</h1>
          <input type="email" placeholder='email' />
          <button type='submit'>Sign Up</button>
          <button onClick={onClose}>Close</button>
        </div>
    )
}

export default WaitlistModal