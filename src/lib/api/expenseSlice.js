import {apiSlice} from './apiSlice';

const expenseSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    financeData: builder.query({
      query: () => ({
        url: '/api/v1/financial-summary',
        method: 'GET',
      }),
    }),
    getDetails: builder.query({
      query: () => ({
        url: '/api/v1/expenses',
        method: 'GET',
      }),
    }),
  }),
});

export const {useFinanceDataQuery, useGetDetailsQuery} = expenseSlice;
