import React from "react";
import {
  FaBriefcase,
  FaGlobe,
  FaEnvelope,
  FaGraduationCap,
  FaRegEye,
} from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { LuPenLine } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const TherapistStep4Review = () => {
  return (
    <div className="bg-[#f9fafb] min-h-screen flex flex-col items-center py-10 ">
      {/* Header OUTSIDE the card */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 w-full max-w-2xl text-left">
        Review Your Profile
      </h2>

      {/* Main Card */}
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
          <img
            src="https://avatars.mds.yandex.net/get-yapic/27232/AET5BT9wsGqH5PebAqSp7VrHfvc-1/orig"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-200"
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              Eliza Hardin
            </h3>
            <p className="text-gray-500 text-sm">Couple Therapist</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FaBriefcase className="text-[#65C6F2]" />
                2+ Years of Experience
              </div>
              <div className="flex items-center gap-1">
                <FaGlobe className="text-[#65C6F2]" />
                English, German
              </div>
            </div>
          </div>
        </div>

        {/* Specialization */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Severe Depression",
              "PTSD",
              "Eating Disorder",
              "Anxiety",
              "Trauma",
              "BPD",
            ].map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">About</h4>
          <p className="text-[#6C6C6C] text-sm leading-relaxed">
            A Psychologist and Wellbeing & Resilience Coach dedicated to
            offering mental health support for youth (14–24) and older adults
            (24+), fostering mental wellbeing through resilience-building. I
            guide clients in cultivating their self-awareness, self-efficacy,
            self-understanding, self-confidence, and self-management. This
            empowers them to navigate challenges and take steps toward crafting
            the life they desire.
          </p>
        </div>

        {/* Languages & Contact */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {/* Languages */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Languages</h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
                English
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
                German
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {/* <div className="flex items-center gap-2">
                <MdEmail className="text-[#333333]" size={18} />
                johndeodemo@gmail.com
              </div> */}
              <div className="flex items-center gap-2 max-w-full overflow-hidden">
                <MdEmail className="text-[#333333] text-base sm:text-lg md:text-xl shrink-0" />
                <span className="text-xs sm:text-sm md:text-base truncate whitespace-nowrap overflow-hidden">
                  johndeodemo@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <PiPhoneCallFill className="text-[#333333]" size={18} />
                1234567890
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Education</h4>

          <div className="space-y-3">
            {[
              {
                degree: "Ph.D. in Clinical Psychology",
                university: "Stanford University",
                years: "2012 - 2016",
              },
              {
                degree: "M.A. in Psychology",
                university: "University of California, Berkeley",
                years: "2010 - 2012",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                {/* Left side */}
                <div className="flex items-center gap-4">
                  <div className="bg-[#EDF9FF] p-3 rounded-xl">
                    <FaGraduationCap className="text-[#65C6F2]" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.university}</p>
                    <p className="text-sm text-gray-400">{edu.years}</p>
                  </div>
                </div>

                {/* Right side icons */}
                <div className="flex gap-3 text-[#65C6F2]">
                  <FaRegEye className="cursor-pointer " />
                  <LuPenLine className="cursor-pointer " />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistStep4Review;
