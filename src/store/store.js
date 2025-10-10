import { configureStore } from '@reduxjs/toolkit';
import therapistStep2Reducer from './therapistStep2Slice';

export const store = configureStore({
  reducer: {
    therapistStep2: therapistStep2Reducer,
  },
});
