import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './funciones/posts/postsSlice';
import { apiSlice } from './features/api/apiSlice'; // importa tu apiSlice

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});