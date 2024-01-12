import React, {useState} from 'react'
import engineerGraphic from '../assets/engineers.svg';
import studentGraphic from '../assets/students.svg';
function Feature() {
  const [tab, setTab] = useState("Student")

  const handleButtonClick = (label:string) => {
    setTab(label)
  }


  return (
    <div className='flex items-center justify-between h-screen '>
      <div className='flex justify-center w-full gap-x-12'>
        {tab=="Student" && <img style={{width:'50rem', height:'50rem'}} src={studentGraphic} alt="illustration of student" />}
        {tab=="Engineer" && <img style={{width:'50rem', height:'50rem'}} src={engineerGraphic} alt="illustration of engineer" />}
        <div className="flex flex-col">
          <div className="flex gap-x-2">
            <button onClick={() => handleButtonClick("Student")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-lg">For students</button>
            <button onClick={() => handleButtonClick("Engineer")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-lg">For engineers</button>
          </div>
          {tab=="Student" && <p>Student description</p>}
          {tab=="Engineer" && <p>Engineer description</p>}
        </div>
      </div>
    </div>
  )
}

export default Feature