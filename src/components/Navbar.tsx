import React from 'react';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul>
          <a href="#home"><img src={logo} alt="csref logo"/></a>
        </ul>
      </nav>
  )
}

export default Navbar