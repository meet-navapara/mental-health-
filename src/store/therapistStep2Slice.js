import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  educationList: [],
  certificationList: [],
  experienceList: [],
};

const therapistStep2Slice = createSlice({
  name: 'therapistStep2',
  initialState,
  reducers: {
    addEducation: (state, action) => {
      state.educationList = [...state.educationList, action.payload];
    },
    addCertification: (state, action) => {
      state.certificationList = [...state.certificationList, action.payload];
    },
    addExperience: (state, action) => {
      state.experienceList = [...state.experienceList, action.payload];
    },
  },
});

export const { addEducation, addCertification, addExperience } = therapistStep2Slice.actions;
export default therapistStep2Slice.reducer;
