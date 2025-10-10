import React from 'react';

const TherapistStep4Review = ({ values }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
      <div className="space-y-4">
        <div>
          <strong>First Name:</strong> {values.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {values.lastName}
        </div>
        <div>
          <strong>Email:</strong> {values.email}
        </div>
        <div>
          <strong>Phone:</strong> {values.phone}
        </div>
        <div>
          <strong>Date of Birth:</strong> {values.dob}
        </div>
        <div>
          <strong>Gender:</strong> {values.gender}
        </div>
        <div>
          <strong>City:</strong> {values.city}
        </div>
        <div>
          <strong>Country:</strong> {values.country}
        </div>
        <div>
          <strong>Bio:</strong> {values.bio}
        </div>
        <div>
          <strong>Education:</strong> {values.education}
        </div>
        <div>
          <strong>Certifications:</strong> {values.certifications}
        </div>
        <div>
          <strong>Specializations:</strong> {values.specializations}
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default TherapistStep4Review;
