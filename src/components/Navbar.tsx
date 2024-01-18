import React from 'react';
import logo from '../assets/react.svg';
import ThemeSwitch from './ThemeSwitch';
import WaitlistBtn from './WaitlistBtn';

interface NavbarProps {
  onThemeChange: () => void;
  curTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeChange, curTheme }) => {
  return (
    <nav
      className="flex items-center justify-between px-32 py-8 text-white scale-up-top"
    >
      <img
        className="h-8"
        src={logo}
        alt="logo"
      />
      <ThemeSwitch curTheme={curTheme} onThemeChange={onThemeChange} />
      <WaitlistBtn text="Join the waitlist" curTheme={curTheme} />
    </nav>
  );
};

export default Navbar;
