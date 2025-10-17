import React from 'react';

const DashboardSessions = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-[#333333] mb-4">Dashboard</h2>
      <p className="text-gray-600">Welcome to your dashboard! This is the home page.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Total Counselling</h3>
          <p className="text-[32px] font-bold leading-[100%] text-black">2.9k</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Today Appointments</h3>
          <p className="text-[32px] font-bold leading-[100%] text-black">08</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Profile Views</h3>
          <p className="text-[32px] font-bold leading-[100%] text-black">28</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSessions;
