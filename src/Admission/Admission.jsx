import React from "react";
import { useEffect } from "react";

const Admission = () => {

console.log(import.meta.env)

  return (
    <div className="min-h-screen flex justify-center items-center p-4 flex-1 overflow-auto relative z-10">
      <div className="w-full max-w-4xl bg-white rounded-md shadow-2xl mt-24 p-8 border ">
        <h1 className="text-3xl font-bold text-center mb-2">
          Admission Form fff {import.meta.env.VITE_SITE_URL}
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Fill out the form carefully for admission
        </p>

        <div className="mb-4 flex items-center space-x-4">
          <label className="block font-bold text-gray-700 mb-1">
            Student ID
          </label>
          <input
            type="text"
            placeholder="ex: 123456"
            className="w-1/4 p-2 border rounded"
          />
        </div>

        <h2 className="font-bold text-gray-800 mb-2">
          <div className="flex items-center mb-2">
            <span>Student Details :</span>
            <div className="flex-grow border-t border-gray-400 ml-2"></div>
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input placeholder="First Name" className="border p-2 rounded" />
          <input placeholder="Middle Name" className="border p-2 rounded" />
          <input placeholder="Last Name" className="border p-2 rounded" />
          <input placeholder="Age" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <select className="border p-2 rounded">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            placeholder="DOB (dd/mm/yyyy)"
            className="border p-2 rounded"
          />
          <input
            placeholder="ex: myname@gmail.com"
            className="border p-2 rounded"
          />
          <input
            placeholder="(+91) 0000000000"
            className="border p-2 rounded"
          />
        </div>

        <h2 className="font-bold text-gray-800 mb-2">
          <div className="flex items-center mb-2">
            <span>Education Details :</span>
            <div className="flex-grow border-t border-gray-400 ml-2"></div>
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            placeholder="Enter school name"
            className="border p-2 rounded"
          />
          <select className="border p-2 rounded">
            <option>Select Board</option>
            <option>CBSC</option>
            <option>ICSE</option>
          </select>
          <select className="border p-2 rounded">
            <option>Select Class</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
        </div>
        <input
          placeholder="Enter your School Address"
          className="border p-2 rounded w-full mb-4"
        />

        <h2 className="font-bold text-gray-800 mb-2">
          <div className="flex items-center mb-2">
            <span>Parent's Details :</span>
            <div className="flex-grow border-t border-gray-400 ml-2"></div>
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input placeholder="Father's Name" className="border p-2 rounded" />
          <input placeholder="Mother's Name" className="border p-2 rounded" />
          <input
            placeholder="ex: myname@gmail.com"
            className="border p-2 rounded"
          />
          <input placeholder="+91 0000000000" className="border p-2 rounded" />
        </div>

        <h2 className="font-bold text-gray-800 mb-2">
          <div className="flex items-center mb-2">
            <span>Address :</span>
            <div className="flex-grow border-t border-gray-400 ml-2"></div>
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input placeholder="Address Line 1" className="border p-2 rounded" />
          <input placeholder="Address Line 2" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input placeholder="Enter City" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option>State</option>
          </select>
          <input
            placeholder="Postal / Zip Code"
            className="border p-2 rounded"
          />
          <select className="border p-2 rounded">
            <option>Country</option>
            <option>India</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-500 text-white py-2 px-8 rounded hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
