import React from 'react'

interface ThemeSwitchToggleProps {
    onClick: () => void;
    curTheme: string;
}

function ThemeSwitchToggle({ onClick, curTheme }: ThemeSwitchToggleProps) {
  const bgColor = curTheme==="student" ? "bg-green-500" : "bg-sky-500";
  return (
    <div className="flex items-center justify-center w-full ml-28">
      <p className='mx-4'>For Students</p>
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input 
            type="checkbox" 
            id="toggle" 
            className="sr-only"
            onChange={onClick} 
          />
          <div className={`${bgColor} block w-14 h-8 rounded-full`}></div>
          <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${curTheme=="engineer" ? 'transform translate-x-6' : ''}`}></div>
        </div>
      </label>
      <p className='mx-4'>For Engineers</p>
    </div>
  )
}

export default ThemeSwitchToggle