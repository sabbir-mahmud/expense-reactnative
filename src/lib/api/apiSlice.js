import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const URL =
  process.env.NEXT_PUBLIC_API_HOST || 'https://api.expense.oneislam.pro';

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, {getState}) => {
    const token = getState().user; // Adjust this path based on your store structure

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['auth', 'expense'],
  endpoints: builder => ({}),
});

export const {} = apiSlice;
