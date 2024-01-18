import React from 'react'
import WaitlistBtn from './WaitlistBtn'
import data from '../utils/data.json'

interface MainTextProps {
  curTheme: string;
}
const studentData = data.find(obj => obj.student);
const engineerData = data.find(obj => obj.engineer);

const studentMainText = studentData ? studentData.student.mainText : null;
const engineerMainText = engineerData ? engineerData.engineer.mainText : null;

export default function MainText({ curTheme }: MainTextProps) {
  return (
    <>
      {curTheme==="student" && studentMainText && 
        <div className=' h-96 mt-32 ml-auto mb-16 mr-auto sm:container text-center px-96 gap-y-8 flex flex-col '>
          <h1 className='font-bold text-7xl'>{studentMainText.header}</h1>
          <p className='text-lg text-slate-300'>{studentMainText.description}</p>
          <div className="min-w-8 ml-auto mr-auto font-light text-3xl">
            <WaitlistBtn text="Get Started" curTheme={curTheme}/>
          </div>
        </div>
      }
      {curTheme==="engineer" && engineerMainText &&
        <div className=' h-96 mt-32 ml-auto mb-16 mr-auto sm:container text-center px-96 gap-y-8 flex flex-col '>
          <h1 className='font-bold text-7xl'>{engineerMainText.header}</h1>
          <p className='text-lg text-slate-300'>{engineerMainText.description}</p>
          <div className="min-w-8 ml-auto mr-auto font-light text-3xl">
            <WaitlistBtn text="Get Started" curTheme={curTheme}/>
          </div>
        </div>
      }
    </>
  )
}