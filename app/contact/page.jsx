import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

const contactpage = () => {
  return (
    <>
    <div>contact page</div>
    <Link href="/"className={styles.link}>Home</Link>
   </>
    
  )
}

export default contactpage