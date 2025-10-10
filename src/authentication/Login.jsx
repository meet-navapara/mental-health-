import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout';
import logo from '../assets/logo.png';
import login_brain from '../assets/login_brain.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Layout img={login_brain}>
      <div className="w-full max-w-md px-4 rounded-lg font-sans font-medium text-[16px] leading-[100%] tracking-[0px]">
        <div className='flex mb-4'>
             <img src={logo} alt="Logo" className="h-10 mb-3" />
             <h2 className='font-bold ms-3 mt-3 text-[26px]'>Logoipsum</h2>
        </div>
        <div className="flex flex-col  mb-6">
          <h2 className="text-[22px] font-semibold text-gray-800">
            Welcome! Please log in to continue
          </h2>
        </div>

        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full mt-2 px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white placeholder:text-[14px] text-black"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full mt-2 px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white placeholder:text-[14px] text-black"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-2 top-8 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-700">
                  <Field type="checkbox" name="remember" className="mr-2" />
                  Remember me
                </label>
                <span className="text-[#65C6F2] text-sm hover:underline">
                  Forgot Password?
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full  bg-[#65C6F2] text-white py-3 rounded-md hover:bg-[#4aa0d8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-6 text-gray-600 text-sm">
          Don’t have an account?{' '}
          <span className="text-[#65C6F2]  hover:underline">
            Create an Account
          </span>
        </div>

        <div className="text-center mt-6 text-gray-400  text-xs">
          <span className="hover:underline">
            Privacy Policy
          </span>{' '}
          |{' '}
          <span className="hover:underline text-gray-400  ">
            Terms & Conditions
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
