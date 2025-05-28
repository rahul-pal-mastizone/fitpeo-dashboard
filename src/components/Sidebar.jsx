import React from 'react';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaNotesMedical, FaChartBar, FaComments, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col justify-between p-6">
      {/* Top Logo and Menu */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-10">Health<span className="text-black">care.</span></h2>
        <nav className="flex flex-col gap-4 text-gray-700">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" active />
          <SidebarItem icon={<FaHistory />} label="History" />
          <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
          <SidebarItem icon={<FaNotesMedical />} label="Appointments" />
          <SidebarItem icon={<FaChartBar />} label="Statistics" />
          <SidebarItem icon={<FaComments />} label="Chat" />
        </nav>
      </div>

      {/* Bottom Settings */}
      <div className="text-gray-700">
        <SidebarItem icon={<FaCog />} label="Setting" />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition ${
        active ? 'bg-blue-100 text-blue-600 font-semibold' : ''
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default Sidebar;
