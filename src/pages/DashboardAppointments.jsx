import React from 'react';

const DashboardAppointments = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Appointments</h2>
      <p className="text-gray-600">View and manage your appointments.</p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center p-4 border rounded-lg">
            <div>
              <p className="font-semibold">Session with Patient A</p>
              <p className="text-gray-600">Date: 2023-10-15 | Time: 10:00 AM</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Join
            </button>
          </li>
          <li className="flex justify-between items-center p-4 border rounded-lg">
            <div>
              <p className="font-semibold">Session with Patient B</p>
              <p className="text-gray-600">Date: 2023-10-16 | Time: 2:00 PM</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Join
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAppointments;
