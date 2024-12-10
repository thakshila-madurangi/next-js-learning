import React from 'react'

const Footer = () => {
    return (
      <footer className="text-white px-8 py-6 bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-8 md:mb-0">
          <p><a href="mailto:calinscompagnies@calins.com"
         className="hover:text-yellow-400">dmtmadurangi@gmail.com</a></p>
          </div>
          <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul>
                  <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Help</a></li>
                  
              </ul>
          </div>
          <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Personal Details</h3>
              <ul>
                  <li><a href="#" className="hover:text-yellow-400">Full name</a></li>
                  <li><a href="#" className="hover:text-yellow-400">My Addresses</a></li>
                  
              </ul>
          </div>
          <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="mb-4">
                  <li><a href="tel:+1514890000" className="hover:text-yellow-400">contact no</a></li>
                  <li><a href="mailto:sujith.jeewantha@gmail.com" className="hover:text-yellow-400">Send mail</a></li>
              </ul>
              <div className="mt-4 icons">
                  <a href="#" className="mr-2"><i className="fab fa-facebook fa-2x"></i></a>
                  <a href="#" className="mr-2"><i className="fab fa-instagram fa-2x"></i></a>
                  <a href="mailto:sujith.jeewantha@gmail.com"><i className="far fa-envelope fa-2x"></i></a>
              </div>
          </div>
      </div>
      <p className="text-center mt-8">&copy;  2024 - All rights reserved.</p>
  </footer>
    )
  }
  
  export default Footer