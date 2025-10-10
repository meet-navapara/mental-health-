import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiUpload } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../store/therapistStep2Slice';

const years = Array.from(new Array(50), (val, index) => new Date().getFullYear() - index);

const EducationSchema = Yup.object().shape({
  school: Yup.string().required('School is required'),
  degree: Yup.string().required('Degree is required'),
  startYear: Yup.string().required('Start year is required'),
  endYear: Yup.string()
    .required('End year is required')
    .test('is-greater', 'End year must be greater than or equal to start year', function(value) {
      const { startYear } = this.parent;
      return !startYear || !value || parseInt(value) >= parseInt(startYear);
    }),
  degreePhoto: Yup.mixed().required('Degree photo is required'),
});

const TherapistEducationModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent  flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          &#x2715;
        </button>
        <h2 className="text-lg font-semibold mb-4">Add Education</h2>
        <Formik
          initialValues={{
            school: '',
            degree: '',
            startYear: '',
            endYear: '',
            degreePhoto: null,
          }}
          validationSchema={EducationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addEducation(values));
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-4 text-gray-900">
              <div>
                <label htmlFor="school" className="block mb-1 text-sm">
                  School<span className="text-red-500">*</span>
                </label>
                <Field
                  id="school"
                  name="school"
                  placeholder="Ex. Boston University"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                />
                <ErrorMessage name="school" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="degree" className="block mb-1 text-sm">
                  Degree<span className="text-red-500">*</span>
                </label>
                <Field
                  id="degree"
                  name="degree"
                  placeholder="Enter your course"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                />
                <ErrorMessage name="degree" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="startYear" className="block mb-1 text-sm">
                    Start Year<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    id="startYear"
                    name="startYear"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                  >
                    <option value="" disabled>Select</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="startYear" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="flex-1">
                  <label htmlFor="endYear" className="block mb-1 text-sm">
                    End Year<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    id="endYear"
                    name="endYear"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                  >
                    <option value="" disabled>Select</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="endYear" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm">
                  Degree Photo<span className="text-red-500">*</span>
                </label>
                <div
                  onClick={() => document.getElementById('degreePhoto').click()}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('degreePhoto').click(); }}
                  role="button"
                  tabIndex={0}
                  className="border-2 border-dashed border-gray-300 rounded p-6 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65C6F2]"
                >
                  <FiUpload className="text-[#65C6F2] w-8 h-8 mb-2" />
                  {values.degreePhoto ? (
                    <p className="text-gray-600 mb-1">{values.degreePhoto.name}</p>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-1">Click to upload files or drag and drop</p>
                      <p className="text-gray-400 text-sm">png, jpg, jpeg up to 4MB each</p>
                    </>
                  )}
                </div>
                <input
                  id="degreePhoto"
                  name="degreePhoto"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(event) => {
                    setFieldValue('degreePhoto', event.currentTarget.files[0]);
                  }}
                  className="hidden"
                />
                <ErrorMessage name="degreePhoto" component="div" className="text-red-500 text-sm mt-1" />
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

export default TherapistEducationModal;
