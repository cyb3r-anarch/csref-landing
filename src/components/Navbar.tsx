import React from 'react'
import logo from '../assets/react.svg'
import ThemeSwitch from './ThemeSwitch'
import WaitlistBtn from './WaitlistBtn';

interface NavbarProps {
  onThemeChange: () => void;
  curTheme: string;
}

function Navbar({ onThemeChange, curTheme }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 text-white">
        <img className="h-8" src={logo} alt="logo" />
        <ThemeSwitch curTheme={curTheme} onThemeChange={onThemeChange} />
      <WaitlistBtn text="Join the waitlist" curTheme={curTheme}/>
    </nav>
  );
}


export default Navbar