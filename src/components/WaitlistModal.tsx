import React from 'react'
import data from '../utils/data.json'

function WaitlistModal( theme:string, onClose:() => void) {
    return (
        <div className="modal">
          <h1>{`${data}.${theme}.waitlistModalText`}</h1>
          <input type="email" placeholder='email' />
          <button>Sign Up</button>
          <button onClick={onClose}>Close</button>
        </div>
    )
}

export default WaitlistModal