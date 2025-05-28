import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

function TopNavbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm rounded-lg mb-6">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-full max-w-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Side: Notification + Avatar */}
      <div className="flex items-center gap-4 ml-4">
        <FaBell className="text-gray-500 cursor-pointer text-lg" />
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
          {/* Replace with avatar image if needed */}
          A
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
