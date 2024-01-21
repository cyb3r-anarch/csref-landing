import React from 'react'
import WaitlistBtn from './WaitlistBtn'
import data from '../utils/data.json'

interface MainTextProps {
  curTheme: string;
  isSignedUp: boolean;
  onSignUp: () => void;
}
const studentData = data.find(obj => obj.student);
const engineerData = data.find(obj => obj.engineer);

const studentMainText = studentData ? studentData.student.mainText : null;
const engineerMainText = engineerData ? engineerData.engineer.mainText : null;


export default function MainText({ curTheme, isSignedUp, onSignUp }: MainTextProps) {

  const mainText = curTheme==="student" ? studentMainText.header : engineerMainText.header;
  const description = curTheme==="student" ? studentMainText.description : engineerMainText.description;
  return (
    <>        
      <div className=' h-96 mt-32 ml-auto mb-16 mr-auto sm:container text-center px-96 gap-y-8 flex flex-col fade-in'>
        <h1 className='font-bold text-7xl'>{mainText}</h1>
        <p className='text-lg text-slate-300'>{description}</p>
        <div className="min-w-8 ml-auto mr-auto text-2xl">
          <WaitlistBtn isSignedUp={isSignedUp} onSignUp={onSignUp} text="Get Started" curTheme={curTheme}/>
        </div>
      </div>
    </>
  )
}