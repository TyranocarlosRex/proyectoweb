import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './funciones/posts/postsSlice';
import { apiSlice } from './features/api/apiSlice';
import { modelosApi } from './features/api/modelosApi';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [modelosApi.reducerPath]: modelosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, modelosApi.middleware),
});