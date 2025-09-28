import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = ({ page }) => {
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
            <span className={styles.logoText}>AI Association</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a className={ page === 'Home' ? styles.navLinkActive :  styles.navLink } href="#">Home</a>
            <a className={page === 'Projects' ? styles.navLinkActive :  styles.navLink} href="#">Projects</a>
            <a className={page === 'Symposium' ? styles.navLinkActive :  styles.navLink} href="#">Symposium</a>
            <a className={page === 'Gallery' ? styles.navLinkActive :  styles.navLink} href="#">Gallery</a>
            <a className={page === 'People' ? styles.navLinkActive :  styles.navLink} href="#">People</a>
            <a className={page === 'Placements' ? styles.navLinkActive :  styles.navLink} href="#">Placements</a>
            <a className={page === 'Events' ? styles.navLinkActive :  styles.navLink} href="#">Events</a>
            <a className={page === 'Achievements' ? styles.navLinkActive :  styles.navLink} href="#">Achievements</a>
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
          <a className={`${styles.mobileNavLink} ${ page === "Home" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Home</a>
          <a className={`${styles.mobileNavLink} ${ page === "Projects" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Projects</a>
          <a className={`${styles.mobileNavLink} ${ page === "Symposium" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Symposium</a>
          <a className={`${styles.mobileNavLink} ${ page === "Gallery" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Gallery</a>
          <a className={`${styles.mobileNavLink} ${ page === "People" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>People</a>
          <a className={`${styles.mobileNavLink} ${ page === "Placements" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Placements</a>
          <a className={`${styles.mobileNavLink} ${ page === "Events" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Events</a>
          <a className={`${styles.mobileNavLink} ${ page === "Achievements" ? styles.mobileNavLinkActive : null}`} href="#" onClick={toggleMobileMenu}>Achievements</a>

          
        </div>
      </div>
    </header>
  );
};

export default Header;