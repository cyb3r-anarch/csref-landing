import React from 'react';
import logo from '../assets/react.svg';
import ThemeSwitch from './ThemeSwitch';
import WaitlistBtn from './WaitlistBtn';
import { motion } from 'framer-motion';

interface NavbarProps {
  onThemeChange: () => void;
  curTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeChange, curTheme }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-32 py-8 text-white"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-8"
        src={logo}
        alt="logo"
      />
      <ThemeSwitch curTheme={curTheme} onThemeChange={onThemeChange} />
      <WaitlistBtn text="Join the waitlist" curTheme={curTheme} />
    </motion.nav>
  );
};

export default Navbar;
