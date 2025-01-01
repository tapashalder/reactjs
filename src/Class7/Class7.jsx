import React, { useState } from "react";

const students = [
  {
    roll: "25964",
    photo: "https://via.placeholder.com/40",
    name: "Rohit Roy",
    gender: "Male",
    class: "7",
    parents: "Rohan Roy",
    address: "Kokata",
    dob: "02/05/2001",
    phone: "+91 9988568",
    email: "Email@gmail.com",
  },
  {
    roll: "78635",
    photo: "https://via.placeholder.com/40",
    name: "Salman Khan",
    gender: "Male",
    class: "7",
    parents: "SK Khan",
    address: "Ranaghat",
    dob: "02/05/2001",
    phone: "+91 9988568",
    email: "Email93@gmail.com",
  },
  // Add more students as needed
];

function Class7() {
  const [search, setSearch] = useState({
    roll: "",
    name: "",
    class: "",
  });

  const filteredStudents = students.filter(
    (student) =>
      student.roll.includes(search.roll) &&
      student.name.toLowerCase().includes(search.name.toLowerCase()) &&
      student.class.includes(search.class)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex-1 overflow-auto relative z-10">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Students</h1>
        <p className="text-sm text-gray-500">Dashboard &gt; Class 7</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">
          All Students Data
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by Roll..."
            value={search.roll}
            onChange={(e) => setSearch({ ...search, roll: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Search by Name..."
            value={search.name}
            onChange={(e) => setSearch({ ...search, name: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Search by Class..."
            value={search.class}
            onChange={(e) => setSearch({ ...search, class: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Student-ID</th>
              <th className="border border-gray-300 px-4 py-2">Photo</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Class</th>
              <th className="border border-gray-300 px-4 py-2">Parents</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">
                Date of Birth
              </th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {student.roll}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={student.photo}
                    alt="Student"
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.gender}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.class}
                </td>
                {/* <td className="border border-gray-300 px-4 py-2">
                  {student.section}
                </td> */}
                <td className="border border-gray-300 px-4 py-2">
                  {student.parents}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.dob}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Class7;
