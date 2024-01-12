import React from 'react'
import graphic from '../assets/graphic1.svg';

function Signup() {
  return (
    <main className='mt-20'>
        <div >
          <p>COMING SOON</p>
          <h1>Secure an Internship</h1>
          <p >Request referrals to get an advantage over other candidates for swe internship opportunities.</p>
          <div >
            <input type="email" placeholder='email address' /><button type="submit">Submit</button>
          </div>
        </div>
        <div>
          <img src={graphic} alt="referral graphic" />
        </div>
      </main>
  )
}

export default Signup