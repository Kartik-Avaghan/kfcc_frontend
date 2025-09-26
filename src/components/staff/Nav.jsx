
import { useState } from "react";
import { Film, MessageSquare, FileText, Globe, LogOut, ChevronRight, User, Settings } from 'lucide-react';

function Nav() {
  const [activeItem, setActiveItem] = useState('Title Registration');

  const menuItems = [
    {
      name: 'Title Registration',
      icon: FileText,
      href: '/registration',
      active: true
    },
    {
      name: 'Remarked Titles',
      icon: MessageSquare,
      href: '/remarked-titles',
      active: false
    },
    {
      name: 'Public Clearance',
      icon: Globe,
      href: '/publication',
      active: false
    }
      
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Film className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">KFCC</h1>
              <p className="text-xs text-blue-200">Karnataka Film Chamber</p>
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium">Staff User</p>
              <p className="text-xs text-blue-200">Staff</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 p-6">
          <nav className="space-y-2">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide mb-4">
              Main Menu
            </p>
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.name;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`
                    group flex items-center justify-between w-full p-4 rounded-xl transition-all duration-200
                
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent 
                      className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blackgroup-hover:text-white'} transition-colors`} 
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Settings Section */}
        <div className="p-6 border-t border-blue-800">
          <a
            href="/settings"
            className="group flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-opacity-5 transition-all duration-200"
          >
            <Settings className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
            <span className="font-medium">Settings</span>
          </a>
        </div>

        {/* Logout Section */}
        <div className="p-6">
          <a
            href="/"
            className="group flex items-center justify-center space-x-3 w-full p-4 border-2 border-red-400 rounded-xl text-red-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 font-medium"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
