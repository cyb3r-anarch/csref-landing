import React from 'react'
import logo from '../assets/react.svg'
import ThemeSwitch from './ThemeSwitch'
import WaitlistBtn from './WaitlistBtn';

interface NavbarProps {
  onThemeChange: () => void;
}

function Navbar({ onThemeChange }: NavbarProps) {
  return (
    <ul>
      <img src={logo} alt="logo" />
      <ThemeSwitch onThemeChange={onThemeChange}/>
      <WaitlistBtn />
    </ul>
  )
}

export default Navbar