import React from 'react'
import WaitlistBtn from './WaitlistBtn'

interface MainTextProps {
  curTheme: string;
}

export default function MainText({ curTheme }: MainTextProps) {
  return (
    <div>
      MainText
      <WaitlistBtn curTheme={curTheme}/>
    </div>
  )
}