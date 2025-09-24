import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-62 bg-blue-950 text-white flex flex-col  p-6">
        <h1 className="text-2xl font-bold mb-10 ">KFCC</h1>
        <ul className="space-y-6 text-lg ">
          <li className="hover:text-gray-300 transition-colors">
            
              Title Registration
            
          </li>
          <li>
            <Link
              to="/publication"
              className="hover:text-gray-300 transition-colors"
            >
              Public Clearance
            </Link>
          </li>
          <li>
  <Link
    to="/logout"
    className="block border border-white rounded-2xl text-center py-1 px-0 hover:bg-white hover:text-blue-950 transition-colors"
  >
    Logout
  </Link>
</li>

        </ul>
      </div>

      
    </div>
  );
}

export default Nav;
