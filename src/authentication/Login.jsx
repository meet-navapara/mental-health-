import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from '../components/Layout';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <Layout>
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
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
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
                  className="w-full mt-2 px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white placeholder:text-[14px]"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full mt-2 px-3 py-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white placeholder:text-[14px]"
                />
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
