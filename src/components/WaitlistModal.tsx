import React, {FormEvent, useState} from 'react'
import data from '../utils/data.json'

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
        <div>
            <form className='modal' onSubmit={onSubmit}>
                <label>{text}</label><input name="email" type="email" required onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit'>Sign Up</button>
                <button onClick={onClose}>Close</button>
            </form>
        </div>
    );
}

export default WaitlistModal