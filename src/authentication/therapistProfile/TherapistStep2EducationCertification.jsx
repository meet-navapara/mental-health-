import React, { useState } from 'react';
import { FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import TherapistEducationModal from './TherapistEducationModal';
import TherapistCertificationModal from './TherapistCertificationModal';
import TherapistExperienceModal from './TherapistExperienceModal';
import { HiOutlineAcademicCap } from 'react-icons/hi';

const TherapistStep2EducationCertification = ({ isEducationModalOpen, setIsEducationModalOpen, isCertificationModalOpen, setIsCertificationModalOpen, isExperienceModalOpen, setIsExperienceModalOpen }) => {
  const { educationList, certificationList, experienceList } = useSelector((state) => state.therapistStep2);

  return (
    <>
      <div className={isEducationModalOpen || isCertificationModalOpen || isExperienceModalOpen ? "opacity-10 pointer-events-none" : ""}>
        <h3 className="text-lg font-semibold mb-6">Education & Certification</h3>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-semibold">Education</h4>
            <button
              type="button"
              className="text-[#65C6F2] font-semibold hover:underline"
              onClick={() => setIsEducationModalOpen(true)}
            >
              + Add
            </button>
          </div>
          {educationList.length === 0 ? (
            <div className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="p-3 rounded-md bg-gray-100 text-[#65C6F2] mr-4">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-[18px]">School Name</p>
                <p className="text-gray-400 text-sm">Course Name</p>
                <p className="text-gray-400 text-sm mt-1">2022-2023</p>
              </div>
            </div>
          ) : (
            educationList.map((edu, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4"
              >
                <div className="p-3 rounded-md bg-gray-100 text-[#65C6F2] mr-4">
                  <HiOutlineAcademicCap size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700 text-[18px]">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.degree}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              </div>
            ))
          )}
        </section>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-semibold">Certifications</h4>
            <button
              type="button"
              className="text-[#65C6F2] font-semibold hover:underline"
              onClick={() => setIsCertificationModalOpen(true)}
            >
              + Add
            </button>
          </div>
          {certificationList.length === 0 ? (
            <div className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="p-3 rounded-md bg-gray-100 text-[#65C6F2] mr-4">
                <FaCertificate size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-[18px]">Certificate Name</p>
                <p className="text-gray-400 text-sm">License Number</p>
                <p className="text-gray-400 text-sm mt-1">2022-2023</p>
              </div>
            </div>
          ) : (
            certificationList.map((cert, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4"
              >
                <div className="p-3 rounded-md bg-gray-100 text-[#65C6F2] mr-4">
                  <FaCertificate size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700 text-[18px]">{cert.certificateName}</p>
                  <p className="text-gray-400 text-sm">{cert.licenseNumber}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
                </div>
              </div>
            ))
          )}
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-semibold">Experience</h4>
            <button
              type="button"
              className="text-[#65C6F2] font-semibold hover:underline"
              onClick={() => setIsExperienceModalOpen(true)}
            >
              + Add
            </button>
          </div>
          {experienceList.length === 0 ? (
            <div className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="p-3 rounded-md bg-gray-100 text-[#65C6F2] mr-4">
                <FaBriefcase size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-[18px]">Your Position</p>
                <p className="text-gray-400 text-sm">Company Or organization</p>
                <p className="text-gray-400 text-sm mt-1">2022-2023</p>
              </div>
            </div>
          ) : (
            experienceList.map((exp, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4"
              >
                <div className="p-3 rounded-md bg-gray-100 text-[#65C6F2] mr-4">
                  <FaBriefcase size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700 text-[18px]">{exp.position}</p>
                  <p className="text-gray-400 text-sm">{exp.organization}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {exp.startYear} - {exp.currentlyWorking ? 'Present' : exp.endYear}
                  </p>
                </div>
              </div>
            ))
          )}
        </section>
      </div>

    </>
  );

};

export default TherapistStep2EducationCertification;
