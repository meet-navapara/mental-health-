import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiUpload } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addExperience } from '../../store/therapistStep2Slice';

const years = Array.from(new Array(50), (val, index) => new Date().getFullYear() - index);

const ExperienceSchema = Yup.object().shape({
  position: Yup.string().required('Position is required'),
  organization: Yup.string().required('Organization is required'),
  startYear: Yup.string().required('Start year is required'),
  endYear: Yup.string(),
  currentlyWorking: Yup.boolean(),
  experiencePhoto: Yup.mixed().test('fileRequired', 'Experience certificate photo is required', value => value !== null),
}).test('endYearRequired', 'End year is required when not currently working', function(value) {
  if (!value.currentlyWorking && !value.endYear) {
    return this.createError({ path: 'endYear', message: 'End year is required' });
  }
  return true;
}).test('endYearGreater', 'End year must be greater than or equal to start year', function(value) {
  if (!value.currentlyWorking && value.startYear && value.endYear) {
    if (parseInt(value.endYear) < parseInt(value.startYear)) {
      return this.createError({ path: 'endYear', message: 'End year must be greater than or equal to start year' });
    }
  }
  return true;
});

const TherapistExperienceModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-lg font-semibold mb-4">Add Experience</h2>
        <Formik
          initialValues={{
            position: '',
            organization: '',
            startYear: '',
            endYear: '',
            currentlyWorking: false,
            experiencePhoto: null,
          }}
          validationSchema={ExperienceSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addExperience(values));
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-4 text-gray-900">
              <div>
                <label htmlFor="position" className="block mb-1 text-sm">
                  Position<span className="text-red-500">*</span>
                </label>
                <Field
                  id="position"
                  name="position"
                  placeholder="Enter your position"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                />
                <ErrorMessage name="position" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="organization" className="block mb-1 text-sm">
                  Organization<span className="text-red-500">*</span>
                </label>
                <Field
                  id="organization"
                  name="organization"
                  placeholder="Enter organization name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65C6F2] bg-white text-black text-[14px] font-sans"
                />
                <ErrorMessage name="organization" component="div" className="text-red-500 text-sm mt-1" />
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
                    End Year{!values.currentlyWorking && <span className="text-red-500">*</span>}
                  </label>
                  <Field
                    as="select"
                    id="endYear"
                    name="endYear"
                    disabled={values.currentlyWorking}
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

              <div className="flex items-center space-x-2">
                <Field
                  type="checkbox"
                  id="currentlyWorking"
                  name="currentlyWorking"
                  className="form-checkbox h-4 w-4 text-[#65C6F2]"
                />
                <label htmlFor="currentlyWorking" className="text-sm text-gray-700">
                  Currently Working here
                </label>
              </div>

              <div>
                <label className="block mb-1 text-sm">
                  Experience Certificate Photo<span className="text-red-500">*</span>
                </label>
                <div
                  onClick={() => document.getElementById('experiencePhoto').click()}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('experiencePhoto').click(); }}
                  role="button"
                  tabIndex={0}
                  className="border-2 border-dashed border-gray-300 rounded p-6 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65C6F2]"
                >
                  <FiUpload className="text-[#65C6F2] w-8 h-8 mb-2" />
                  {values.experiencePhoto ? (
                    <p className="text-gray-600 mb-1">{values.experiencePhoto.name}</p>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-1">Click to upload files or drag and drop</p>
                      <p className="text-gray-400 text-sm">png, jpg, jpeg up to 4MB each</p>
                    </>
                  )}
                </div>
                <input
                  id="experiencePhoto"
                  name="experiencePhoto"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(event) => {
                    setFieldValue('experiencePhoto', event.currentTarget.files[0]);
                  }}
                  className="hidden"
                />
                <ErrorMessage name="experiencePhoto" component="div" className="text-red-500 text-sm mt-1" />
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

export default TherapistExperienceModal;
