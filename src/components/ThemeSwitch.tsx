import React from 'react'

interface ThemeSwitchProps {
  onThemeChange: () => void;
}

export default function ThemeSwitch({onThemeChange}: ThemeSwitchProps) {
  return (
    <div className='flex gap-x-4'>
      <p>For Students</p>
      <button onClick={onThemeChange}>Change Theme</button>
      <p>For Engineers</p>
    </div>
  )
}
