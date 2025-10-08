import { useState } from "react";
import { FileText, LogOut, ChevronRight, User } from "lucide-react";

import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Nav() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    // {
    //   name: 'Dashboard',
    //   icon: BarChart3,
    //   href: '/producerdashboard',
    //   active: false
    // },
    {
      name: "Membership Form",
      icon: FileText,
      href: "/user/membership",
      active: false,
    },
    // {
    //   name: 'Public Clearance',
    //   icon: Globe,
    //   href: '/publication',
    //   active: false
    // }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center space-x-3 mb-2">
            <div className="">

              <img
                src={logo}
                alt="KFCC logo"
                srcset=""
                className="size-14 rounded-full"
              />
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
              <p className="font-medium">Welcome User</p>
              <p className="text-xs text-blue-200">user</p>
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
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-blue-200"
                          : "text-blue-300 group-hover:text-white"
                      } transition-colors`}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-200 ${
                      isActive
                        ? "text-blue-200 rotate-90"
                        : "text-blue-400 group-hover:text-white group-hover:translate-x-1"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Logout Section */}
        <div className="p-6">
          <Link
            to="/login"
            className="group flex items-center justify-center space-x-3 w-full p-3 border-1 rounded-xl text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 font-medium"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
