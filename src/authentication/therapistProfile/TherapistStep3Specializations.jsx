import React from 'react';
import Select from 'react-select';
import { useField, useFormikContext } from 'formik';

const specializationsOptions = [
  { value: 'PTSD', label: 'PTSD' },
  { value: 'Couple Therapy', label: 'Couple Therapy' },
  { value: 'Cognitive Behavioral Therapy', label: 'Cognitive Behavioral Therapy' },
  { value: 'Family Therapy', label: 'Family Therapy' },
];

const languagesOptions = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
];

// Custom styles for react-select options
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#65C6F2' // selected option
      : state.isFocused
      ? '#E0F2FE' // hovered option
      : 'white',
    color: state.isSelected ? 'white' : 'black',
    cursor: 'pointer',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#E0F2FE',
    color: '#1E3A8A',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#1E3A8A',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#1E3A8A',
    ':hover': {
      backgroundColor: '#1E3A8A',
      color: 'white',
    },
  }),
};

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
        styles={customStyles}
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
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Specializations & Languages</h3>
      <MultiSelectField label="Specialization" name="specializations" options={specializationsOptions} />
      <MultiSelectField label="Languages" name="languages" options={languagesOptions} />
    </div>
  );
};

export default TherapistStep3Specializations;
