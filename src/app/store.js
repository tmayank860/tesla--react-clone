import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../feature/car/caeSlice'

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
