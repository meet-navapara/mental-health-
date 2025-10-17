import React from 'react';

const DashboardProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Profile</h2>
      <p className="text-gray-600">Manage your profile information here.</p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-gray-900">John Doe</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">john.doe@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p className="mt-1 text-gray-900">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
