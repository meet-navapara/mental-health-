import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Layout from '../components/Layout';
import logo from '../assets/logo.png';
import signUp_brain from "../assets/signup_brain.png";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  dob: Yup.string().required('Date of birth is required'),
  gender: Yup.string().required('Gender is required'),
  country: Yup.string().required('Country is required'),
  timezone: Yup.string().required('Timezone is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms').required('Terms acceptance is required'),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        country: '',
        timezone: '',
        password: '',
        confirmPassword: '',
        terms: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values, errors, setFieldValue }) => (
        <Layout img={signUp_brain}>
          <div className={`w-full max-w-lg rounded-lg font-sans text-[18px] leading-[100%] tracking-[0px] ${Object.keys(errors).length > 0 ? 'mt-10 pt-10' : ''}`}>
             <div className='flex mb-4 mt-1 pt-3'>
                      <img src={logo} alt="Logo" className="h-10 mb-3" />
                      <h2 className='font-bold ms-3 mt-3 text-[26px]'>Logoipsum</h2>
                 </div>
                 <div className="flex flex-col mb-6">
                   <h2 className="text-[22px] font-semibold text-gray-800">
                     Welcome! Please log in to continue
                   </h2>
                 </div>

            <Form className="space-y-4 text-gray-900">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block mb-1 text-sm">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block mb-1 text-sm">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm">
                  Email Id<span className="text-red-500">*</span>
                </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email id"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                  />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 text-sm">
                  Phone No<span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={values.phone}
                  onChange={(value) => setFieldValue('phone', value)}
                  defaultCountry='IN'
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="dob" className="block mb-1 text-sm">
                    Date Of Birth<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="date"
                    name="dob"
                    placeholder="dd-mm-yyyy"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black placeholder:text-gray-400 text-[14px] font-sans"
                  />
                  <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="flex-1">
                  <label htmlFor="gender" className="block mb-1 text-sm">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-gray-400 text-[14px] font-sans"
                  >
                    <option value="" disabled selected className="text-gray-400">Select</option>
                    <option value="male" className="text-black">Male</option>
                    <option value="female" className="text-black">Female</option>
                    <option value="other" className="text-black">Other</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="country" className="block mb-1 text-sm">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-gray-400 text-[14px] font-sans"
                  >
                    <option value="" disabled selected className="text-gray-400">Select country</option>
                    <option value="usa" className="text-black">USA</option>
                    <option value="uk" className="text-black">UK</option>
                    <option value="india" className="text-black">India</option>
                    {/* Add more countries as needed */}
                  </Field>
                  <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="flex-1">
                  <label htmlFor="timezone" className="block mb-1 text-sm">
                    select Timezone<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="timezone"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-gray-400 text-[14px] font-sans"
                  >
                    <option value="" disabled selected className="text-gray-400">Select timezone</option>
                    <option value="gmt-06" className="text-black"> (GMT-06:00) Central America</option>
                    <option value="gmt-05" className="text-black"> (GMT-05:00) Eastern Time (US & Canada)</option>
                    <option value="gmt+01" className="text-black"> (GMT+01:00) Central European Time</option>
                    {/* Add more timezones as needed */}
                  </Field>
                  <ErrorMessage name="timezone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <label htmlFor="password" className="block mb-1 text-sm">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white placeholder:text-[14px] text-black"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-2 top-8 text-gray-500"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                  </button>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="flex-1 relative">
                  <label htmlFor="confirmPassword" className="block mb-1 text-sm">
                    Confirm Password<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white placeholder:text-[14px] text-black"
                  />
                  <button
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    className="absolute right-2 top-8 text-gray-500"
                    tabIndex={-1}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                  </button>
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div className="flex items-center">
                <Field type="checkbox" name="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  By creating an account, you agree to our{' '}
                  <span className="text-[#65C6F2]  hover:underline">Terms of Service</span> &{' '}
                  <span className="text-[#65C6F2]  hover:underline">Privacy Policy</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#65C6F2] text-[16px] font-semibold text-white py-3 rounded-md hover:bg-[#4aa0d8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create An Account
              </button>

              <div className="text-center text-gray-600 text-sm">
                Already have an account?{' '}
                <span className="text-[#65C6F2] hover:underline">Log In</span>
              </div>

              <div className="text-center  text-gray-400 text-xs">
                <span className="hover:underline  ">Privacy Policy</span> |{' '}
                <span className="hover:underline  ">Terms & Conditions</span>
              </div>
            </Form>
          </div>
        </Layout>
      )}
    </Formik>
  );
};


export default Signup