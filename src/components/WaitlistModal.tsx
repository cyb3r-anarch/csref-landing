import React, {FormEvent, useState} from 'react'
import data from '../utils/data.json'
import './Popup.css'; // Import your CSS file for styling

interface WaitlistModalProps {
    curTheme: string;
    onClose: () => void;
}

function WaitlistModal({ curTheme, onClose }: WaitlistModalProps ) {
    
    const themeObject = data.find(obj => obj[curTheme]);
    const text = themeObject[curTheme].waitlistModalText;
    
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addToList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        }).then((response) => {
            console.log(response)
        }).catch(() => {
            console.log("error")
        }).finally(() => {
            onClose()
        })
    }
  
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute z-10"></div>
        <div className="bg-sky-950 p-6 rounded shadow-md z-20 flex flex-col">
          <form onSubmit={onSubmit}>
            <label className="text-lg">{text}</label>
            <input
              className="block w-full mt-2 p-2 border border-gray-300 rounded"
              name="email"
              placeholder='Email...'
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
              <button
                onClick={onClose}
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      );
}

export default WaitlistModal