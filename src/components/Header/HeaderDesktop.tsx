import React from 'react'
import styles from '@/styles/components/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top bar with contact info */}
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span>📞 123-456-7890</span>
          <Link href="/login">Login</Link>
        </div>
      </div>      
      <div className={styles.mainHeader}>
      <div className={styles.logo}>
          <Image src={'/assets/download.png'} width={200} height={200} alt="Logo" />
        </div>
        <div className={styles.nav1}>
          <nav className={styles.nav}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
