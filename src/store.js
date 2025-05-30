import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './funciones/posts/postsSlices';

export const store = configureStore({
  reducer: { posts: postsReducer },
});