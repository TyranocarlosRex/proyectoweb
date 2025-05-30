import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    user: 'DemoUser',
    avatar: 'https://i.pravatar.cc/40',
    image: 'https://placehold.co/400',
    caption: '¡Primer modelo publicado!',
    createdAt: Date.now(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        // insertamos al inicio para que salga arriba
        state.unshift(action.payload);
      },
      prepare({ user, avatar, image, caption }) {
        return {
          payload: {
            id: nanoid(),
            user,
            avatar,
            image,
            caption,
            createdAt: Date.now(),
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;