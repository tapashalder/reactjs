import React, { useState }from "react";
import Navbar from "../Navbar/Navbar";

import Dashboard from "../Dashboard/Dashboard";

const TopNavbar = () => {



  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      {/* <button
        onClick={toggleSidebar}
        className="text-white hover:text-gray-300 focus:outline-none fixed z-50 bg-red-600 top-20 w-40 h-40"
      ></button> */}

      <header
        className={
          "flex-1 overflow-auto relative top-0 left-0 w-full bg-slate-300 shadow-md z-10 transition-all duration-300 " +
          (!isSidebarOpen ? "pl-80 w-64" : "pl-0 w-0")
        }
      >
        
        <div className="flex justify-between items-center px-6 py-3">
          {/* Left Side */}
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 focus:outline-none bg-red-700 absolute z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="text-lg font-bold text-gray-700">COGNITIO</div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 transition"
            >
              Visit site
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 transition"
            >
              Hello Admin
            </a>
          </div>
        </div>
      </header>

      <Navbar showhidenav={isSidebarOpen} />

      <Dashboard />
      

    </>
  );
};

export default TopNavbar;
