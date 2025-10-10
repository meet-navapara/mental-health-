import React from 'react';
import Select from 'react-select';
import { useField, useFormikContext } from 'formik';

const specializationsOptions = [
  { value: 'PTSD', label: 'PTSD' },
  { value: 'Couple Therapy', label: 'Couple Therapy' },
  { value: 'Cognitive Behavioral Therapy', label: 'Cognitive Behavioral Therapy' },
  { value: 'Family Therapy', label: 'Family Therapy' },
  // Add more specializations as needed
];

const languagesOptions = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  // Add more languages as needed
];

// Custom multi-select component integrated with Formik
const MultiSelectField = ({ label, name, options }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (selectedOptions) => {
    setFieldValue(name, selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const selectedValues = options.filter(option => field.value?.includes(option.value));

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 font-semibold text-gray-700">{label}</label>
      <Select
        inputId={name}
        isMulti
        options={options}
        value={selectedValues}
        onChange={handleChange}
        classNamePrefix="react-select"
        className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        placeholder="Select"
      
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

const TherapistStep3Specializations = () => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Specialization</h3>
      <MultiSelectField label="Specialization" name="specializations" options={specializationsOptions} />
      <MultiSelectField label="Languages" name="languages" options={languagesOptions} />
    </div>
  );
};

export default TherapistStep3Specializations;
