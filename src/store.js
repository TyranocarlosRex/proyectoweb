import { configureStore } from '@reduxjs/toolkit';
import reducerEjemplo from '../features/ejemplo/ejemploSlice';

export const store = configureStore({
  reducer: {
    ejemplo: reducerEjemplo,
    // aquí más slices…
  },
});