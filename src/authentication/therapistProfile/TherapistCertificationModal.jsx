import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiUpload } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addCertification } from '../../store/therapistStep2Slice';

const years = Array.from(new Array(50), (val, index) => new Date().getFullYear() - index);

const CertificationSchema = Yup.object().shape({
  certificateName: Yup.string().required('Certificate Name is required'),
  licenseNumber: Yup.string().required('License Number is required'),
  year: Yup.string().required('Year is required'),
  certificatePhoto: Yup.mixed().required('Certificate photo is required'),
});

const TherapistCertificationModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          &#x2715;
        </button>
        <h2 className="text-lg font-semibold mb-4">Add Certification</h2>
        <Formik
          initialValues={{
            certificateName: '',
            licenseNumber: '',
            year: '',
            certificatePhoto: null,
          }}
          validationSchema={CertificationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addCertification(values));
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-4 text-gray-900">
              <div>
                <label htmlFor="certificateName" className="block mb-1 text-sm">
                  Certificate Name<span className="text-red-500">*</span>
                </label>
                <Field
                  id="certificateName"
                  name="certificateName"
                  placeholder="Enter name of organization for certification"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                />
                <ErrorMessage name="certificateName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="licenseNumber" className="block mb-1 text-sm">
                  License Number<span className="text-red-500">*</span>
                </label>
                <Field
                  id="licenseNumber"
                  name="licenseNumber"
                  placeholder="Enter Certificate License Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                />
                <ErrorMessage name="licenseNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="year" className="block mb-1 text-sm font-semibold">
                  Year<span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  id="year"
                  name="year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                >
                  <option value="" disabled>Select</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </Field>
                <ErrorMessage name="year" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold">
                  Certificate Photo<span className="text-red-500">*</span>
                </label>
                <div
                  onClick={() => document.getElementById('certificatePhoto').click()}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('certificatePhoto').click(); }}
                  role="button"
                  tabIndex={0}
                  className="border-2 border-dashed border-gray-300 rounded p-6 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65C6F2]"
                >
                  <FiUpload className="text-[#65C6F2] w-8 h-8 mb-2" />
                  {values.certificatePhoto ? (
                    <p className="text-gray-600 mb-1">{values.certificatePhoto.name}</p>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-1">Click to upload files or drag and drop</p>
                      <p className="text-gray-400 text-sm">png, jpg, jpeg up to 4MB each</p>
                    </>
                  )}
                </div>
                <input
                  id="certificatePhoto"
                  name="certificatePhoto"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(event) => {
                    setFieldValue('certificatePhoto', event.currentTarget.files[0]);
                  }}
                  className="hidden"
                />
                <ErrorMessage name="certificatePhoto" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-[#65C6F2] text-white rounded-md font-semibold hover:bg-[#4aa0d8] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TherapistCertificationModal;


