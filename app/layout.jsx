import React from 'react'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar.jsx'

const MainLayout = ({children}) => {
  return (
    <html>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout