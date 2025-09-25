import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Film className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">KFCC</h1>
              <p className="text-xs text-blue-200 hidden sm:block">Karnataka Film Chamber</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/titleregistration"
              className="group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:shadow-lg"
            >
              <PlusCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Register Film</span>
            </a>
            <a
              href="/"
              className="group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:shadow-lg"
            >
              <UserCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Login</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
            aria-label="Toggle menu"
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          toggle 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-blue-900 bg-opacity-95 backdrop-blur-sm border-t border-blue-800 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <a
              href="/titleregistration"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
              onClick={() => setToggle(false)}
            >
              <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Register Film</span>
            </a>
            <a
              href="/"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
              onClick={() => setToggle(false)}
            >
              <UserCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Login</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
