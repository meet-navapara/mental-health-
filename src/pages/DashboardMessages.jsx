import React from 'react';

const DashboardMessages = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Messages</h2>
      <p className="text-gray-600">Check your messages and communications.</p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Messages</h3>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg">
            <p className="font-semibold">From: Patient A</p>
            <p className="text-gray-600">Message: Thank you for the session yesterday.</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </li>
          <li className="p-4 border rounded-lg">
            <p className="font-semibold">From: Patient B</p>
            <p className="text-gray-600">Message: Can we reschedule our appointment?</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMessages;
