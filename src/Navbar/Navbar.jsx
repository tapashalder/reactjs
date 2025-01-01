import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //collapsed state
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false); // State for dropdown
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false); // State for dropdown
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false); // State for dropdown
  const [isTeachersDropdownOpen, setIsTeachersDropdownOpen] = useState(false); // State for dropdown

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsCollapsed(!isCollapsed); // Toggle between full and collapsed states
    } else {
      setIsSidebarOpen(true);
    }
  };

  const toggleStudentsDropdown = () => {
    setIsStudentsDropdownOpen(!isStudentsDropdownOpen); // Toggle dropdown visibility
  };
  const toggleClassDropdown = () => {
    setIsClassDropdownOpen(!isClassDropdownOpen); // Toggle dropdown visibility
  };
  const toggleSubjectDropdown = () => {
    setIsSubjectDropdownOpen(!isSubjectDropdownOpen); // Toggle dropdown visibility
  };
  const toggleTeachersDropdown = () => {
    setIsTeachersDropdownOpen(!isTeachersDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="flex fixed top-0 left-0 w-full bg-gray-100 shadow-md z-10">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? (isCollapsed ? "w-60" : "w-64") : "w-0"
        } fixed top-0 left-0 bg-blue-900 text-white h-full transition-all duration-300 z-40 overflow-hidden`}
      >
        <div className="p-4 flex justify-between items-center">
          {!isCollapsed && <h1 className="text-2xl font-bold">COGNITIO</h1>}
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 focus:outline-none"
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
        </div>
        <nav>
          <ul>
            <li
              className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <span className="text-xl">🔄️</span>
              {!isCollapsed && <span>Dashboard</span>}
            </li>
            <li
              className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/Admission");
              }}
            >
              <span className="text-xl">📑</span>
              {!isCollapsed && <span>Admission</span>}
            </li>

            {/* Students Section with Dropdown */}
            <li className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">👩‍🎓</span>
              <span className={`${isCollapsed ? "hidden" : ""}`}>
                Student Details
              </span>
            </li>

            {/* Class Section */}
            <li
              className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer"
              onClick={toggleClassDropdown}
            >
              <span className="text-xl">🏫</span>
              <span className={`${isCollapsed ? "hidden" : ""}`}>Class</span>
              <span className="ml-auto">
                {isStudentsDropdownOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
            </li>
            {isClassDropdownOpen && (
              <ul className="ml-6">
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {<span>Class 7</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Class 8</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Class 9</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Class 10</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Class 11</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Class 12</span>}
                </li>
              </ul>
            )}

            {/* Subject Section */}
            <li
              className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer"
              onClick={toggleSubjectDropdown}
            >
              <span className="text-xl">📚</span>
              <span className={`${isCollapsed ? "hidden" : ""}`}>Subject</span>
              <span className="ml-auto">
                {isSubjectDropdownOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
            </li>
            {isSubjectDropdownOpen && (
              <ul className="ml-6">
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Subject Details</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Add Subject</span>}
                </li>
              </ul>
            )}

            {/* Teachers Section */}
            <li
              className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer"
              onClick={toggleTeachersDropdown}
            >
              <span className="text-xl">👨‍🏫</span>
              <span className={`${isCollapsed ? "hidden" : ""}`}>Teachers</span>
              <span className="ml-auto">
                {isTeachersDropdownOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
            </li>
            {isTeachersDropdownOpen && (
              <ul className="ml-0">
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Teachers Details</span>}
                </li>
                <li className="py-2 px-4 hover:bg-blue-500 cursor-pointer">
                  {!isCollapsed && <span>Add Teachers</span>}
                </li>
              </ul>
            )}

            <li className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">📅</span>
              {!isCollapsed && <span>Class Routine</span>}
            </li>
            <li className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">✔️</span>
              {!isCollapsed && <span>Attendance</span>}
            </li>

            <li className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">💳</span>
              {!isCollapsed && <span>Fees Structure</span>}
            </li>
            <li className="py-3 px-4 hover:bg-blue-800 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">🔁</span>
              {!isCollapsed && <span>Settings</span>}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}

    </div>
  );
};

export default Navbar;
