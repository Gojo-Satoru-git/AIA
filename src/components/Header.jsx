import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <svg className={styles.logoIcon} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
            <h1 className={styles.logoText}>AI Association</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/projects">Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/symposium">Symposium</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/gallery">Gallery</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/people">People</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/placements">Placements</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/events">Events</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} to="/achievements">Achievements</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen1 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen2 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen3 : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/" onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/projects" onClick={toggleMobileMenu}>Projects</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/symposium" onClick={toggleMobileMenu}>Symposium</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/gallery" onClick={toggleMobileMenu}>Gallery</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/people" onClick={toggleMobileMenu}>People</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/placements" onClick={toggleMobileMenu}>Placements</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/events" onClick={toggleMobileMenu}>Events</NavLink>
          <NavLink className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`} to="/achievements" onClick={toggleMobileMenu}>Achievements</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;