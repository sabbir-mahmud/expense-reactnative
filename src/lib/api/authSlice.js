import {apiSlice} from './apiSlice';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: '/api/v1/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useLoginMutation} = authSlice;
