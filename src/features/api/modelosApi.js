import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const modelosApi = createApi({
  reducerPath: 'modelosApi',
  tagTypes: ['Modelos'],          // ← habilita cache tags
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL   // ej. http://localhost:5160/api
  }),
  endpoints: (builder) => ({
    // ---------- GET lista ----------
    getModelos: builder.query({
      query: () => '/modelo3d',
      providesTags: ['Modelos']
    }),

    // ---------- POST nuevo ----------
    addModelo: builder.mutation({
      query: (formData) => ({
        url: '/modelo3d',
        method: 'POST',
        body: formData      // <multipart/form-data>
      }),
      invalidatesTags: ['Modelos']   // ← obliga refetch en Catálogo
    })
  })
});

export const { useGetModelosQuery, useAddModeloMutation } = modelosApi;