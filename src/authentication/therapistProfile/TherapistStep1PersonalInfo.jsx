import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaUserCircle } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";

const TherapistStep1PersonalInfo = ({
  values,
  setFieldValue,
  errors,
  touched,
}) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (values.profilePhoto) {
      const objectUrl = URL.createObjectURL(values.profilePhoto);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [values.profilePhoto]);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue("profilePhoto", file);
  };

  const triggerFileInput = () => {
    document.getElementById("profilePhoto").click();
  };

  return (
    <div className="text-gray-900">
      <div className="mb-4">
        <label className="block mb-1 text-sm" htmlFor="profilePhoto">
          Profile Photo<span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <div className="w-14 h-14 rounded-full  flex items-center justify-center overflow-hidden ">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <IoPersonCircleOutline className="h-12 w-12 text-gray-400" />
            )}
          </div>
          <button
            type="button"
            onClick={triggerFileInput}
            className="px-4 py-1 bg-white border text-sm border-gray-300 rounded-md text-[#65C6F2] font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65C6F2]"
          >
            Upload a Photo
          </button>
        </div>
        <input
          id="profilePhoto"
          name="profilePhoto"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <ErrorMessage
          name="profilePhoto"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="block mb-1 text-sm">
            First Name<span className="text-red-500">*</span>
          </label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block mb-1 text-sm">
            Last Name<span className="text-red-500">*</span>
          </label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm">
          Email Id<span className="text-red-500">*</span>
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email id"
          className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 text-sm">
          Phone No<span className="text-red-500">*</span>
        </label>
        <PhoneInput
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={values.phone}
          onChange={(value) => setFieldValue("phone", value)}
          defaultCountry="US"
          className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
        />
        <ErrorMessage
          name="phone"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="dob" className="block mb-1 text-sm">
            Date Of Birth<span className="text-red-500">*</span>
          </label>
          <Field
            id="dob"
            name="dob"
            type="date"
            placeholder="dd-mm-yyyy"
            className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black placeholder:text-gray-400 text-[14px] font-sans"
          />
          <ErrorMessage
            name="dob"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="gender" className="block mb-1 text-sm">
            Gender<span className="text-red-500">*</span>
          </label>
          <Field
            as="select"
            id="gender"
            name="gender"
            className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-gray-400 text-[14px] font-sans"
          >
            <option value="" disabled selected className="text-gray-400">
              Select
            </option>
            <option value="male" className="text-black">
              Male
            </option>
            <option value="female" className="text-black">
              Female
            </option>
            <option value="other" className="text-black">
              Other
            </option>
          </Field>
          <ErrorMessage
            name="gender"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="city" className="block mb-1 text-sm">
            City<span className="text-red-500">*</span>
          </label>
          <Field
            id="city"
            name="city"
            placeholder="Enter city name"
            className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
          />
          <ErrorMessage
            name="city"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="country" className="block mb-1 text-sm">
            Country<span className="text-red-500">*</span>
          </label>
          <Field
            as="select"
            id="country"
            name="country"
            className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-gray-400 text-[14px] font-sans"
          >
            <option value="" disabled selected className="text-gray-400">
              Select country
            </option>
            <option value="usa" className="text-black">
              USA
            </option>
            <option value="uk" className="text-black">
              UK
            </option>
            <option value="india" className="text-black">
              India
            </option>
            {/* Add more countries as needed */}
          </Field>
          <ErrorMessage
            name="country"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="bio" className="block mb-1 text-sm">
          Bio<span className="text-red-500">*</span>
        </label>
        <Field
          as="textarea"
          id="bio"
          name="bio"
          placeholder="Write something about yourself"
          className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
          rows="4"
        />
        <ErrorMessage
          name="bio"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="videoIntroduction" className="block mb-1 text-sm">
          Video Introduction<span className="text-red-500">*</span>
        </label>
        <div
          onClick={() => document.getElementById("videoIntroduction").click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              document.getElementById("videoIntroduction").click();
          }}
          role="button"
          tabIndex={0}
          className="border-2 border-dashed border-gray-300 bg-white rounded p-6 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65C6F2]"
        >
          <FiUpload className="text-[#65C6F2] w-8 h-8 mb-2" />
          <p className="text-gray-600 mb-1 text-sm">
            Click to upload files or drag and drop
          </p>
          <p className="text-gray-400 text-sm">mp4, Avi, mov up to 50MB each</p>
        </div>
        <input
          id="videoIntroduction"
          name="videoIntroduction"
          type="file"
          accept="video/mp4,video/avi,video/mov"
          onChange={(event) => {
            setFieldValue("videoIntroduction", event.currentTarget.files[0]);
          }}
          className="hidden"
        />
        <ErrorMessage
          name="videoIntroduction"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default TherapistStep1PersonalInfo;
