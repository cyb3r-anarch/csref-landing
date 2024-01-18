import React from 'react'
import ThemeSwitchToggle from './ThemeSwitchToggle';

interface ThemeSwitchProps {
  onThemeChange: () => void;
  curTheme: string;
}

export default function ThemeSwitch({onThemeChange, curTheme}: ThemeSwitchProps) {
  return (
    <div className='flex gap-x-4 text-white'>
      <ThemeSwitchToggle curTheme={curTheme} onClick={onThemeChange}/>
    </div>
  )
}
