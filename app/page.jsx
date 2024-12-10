import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
export default function Home() {

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        ipsum
      </p>
      <ul>
        <li><Link href="/"className={styles.link}>Home</Link></li>
        <li><Link href="/services"className={styles.link}>Services</Link></li>
        <li><Link href="/product"className={styles.link}>Product</Link></li>
        <li><Link href="/About"className={styles.link}>About</Link></li>
        <li><Link href="/contact"className={styles.link}>Contact</Link></li>
        <li><Link href="/About/branchers"className={styles.link}>Branchers</Link></li>
        <li><Link href="/About/carriers"className={styles.link}>Carriers</Link></li>
        <li><Link href="/About/socials">className={styles.link}Socials</Link></li>
        <li><Link href="/product/vegies"id={styles.specialLink}>Vegies</Link></li>
      </ul>
    </div>
  );
}