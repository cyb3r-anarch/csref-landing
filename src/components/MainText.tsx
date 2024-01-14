import React from 'react'
import WaitlistBtn from './WaitlistBtn'

interface MainTextProps {
  curTheme: string;
}

export default function MainText({ curTheme }: MainTextProps) {
  return (
    <div className=' h-96 mt-32 ml-auto mb-16 mr-auto sm:container text-center px-96 gap-y-8 flex flex-col '>
      <h1 className='font-bold text-7xl'>Alternate Payments Made Easy</h1>
      <p className='text-lg'>The most convinient way for merchants in Africa to easily accept mobile money, crypto, cash payments and third-party wallet services from their customers</p>
      <div className="min-w-8 ml-auto mr-auto font-light text-3xl">
        <WaitlistBtn text="Get Access Now" curTheme={curTheme}/>
      </div>
    </div>
  )
}