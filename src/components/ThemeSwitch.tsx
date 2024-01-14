import React from 'react'
import ThemeSwitchToggle from './ThemeSwitchToggle';

interface ThemeSwitchProps {
  onThemeChange: () => void;
  curTheme: string;
}

export default function ThemeSwitch({onThemeChange, curTheme}: ThemeSwitchProps) {
  return (
    <div className='flex gap-x-4 text-cyan-950'>
      <p>For Students</p>
      <ThemeSwitchToggle curTheme={curTheme} onClick={onThemeChange}/>
      <p>For Engineers</p>
    </div>
  )
}
