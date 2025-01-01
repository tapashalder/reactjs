import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 flex flex-col flex-grow p-14 ml-64">
      <div>
        <h1 className="text-lg mb-4 hover:text-blue-700">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32 cursor-pointer">
          <h2 className="text-black font-semibold">Class 7 Student Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Class 8 Student Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Class 9 Student Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Class 10 Student Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Class 11 Student Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Class 12 Student Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Payment Details</h2>
        </div>
        <div className="bg-cyan-400 text-center rounded-lg shadow-md p-10 w-56 h-32">
          <h2 className="text-black font-semibold">Total Student Count</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
