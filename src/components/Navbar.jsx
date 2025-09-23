import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'


function Navbar() {
const[toggle,setToggle]=useState(false)


  return (


 <nav className="relative w-full bg-blue-950 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold md:pl-10">KFCC</h1>

      {/* Desktop Menu */}
     

<ul className="hidden md:flex space-x-8 pr-10">
  <li>
    <Link
      to="/titleregistration"
      className="text-lg cursor-pointer hover:text-gray-300"
    >
      Register
    </Link>
  </li>
  <li>
    <Link
      to="/"
      className="text-lg cursor-pointer hover:text-gray-300"
    >
      Login
    </Link>
  </li>
</ul>



      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggle(!toggle)}
        className="md:hidden focus:outline-none"
      >
        {toggle ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
     {toggle && (
  <div className="absolute right-0 top-[50px] w-full bg-blue-950 flex flex-col items-end space-y-4 py-6 px-7 md:hidden shadow-md z-50">
    <Link to="" className="text-white active:text-gray-300  cursor-pointer">
      Register
    </Link>
    <Link to="" className="text-white active:text-gray-300 cursor-pointer">
      Login
    </Link>
  </div>
)}

    </nav>


  )
}

export default Navbar