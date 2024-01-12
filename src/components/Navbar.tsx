import React from 'react'
import logo from '../assets/react.svg'
import ThemeSwitch from './ThemeSwitch'
import WaitlistBtn from './WaitlistBtn';

interface NavbarProps {
  onThemeChange: () => void;
}

function Navbar({ onThemeChange }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
        <img className="h-8" src={logo} alt="logo" />
        <ThemeSwitch onThemeChange={onThemeChange} />
      <WaitlistBtn />
    </nav>
  );
}


export default Navbar