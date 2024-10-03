import {apiSlice} from './apiSlice';

const expenseSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    financeData: builder.query({
      query: () => ({
        url: '/api/v1/financial-summary',
        method: 'GET',
      }),
      providesTags: ['expense'],
    }),
    getDetails: builder.query({
      query: () => ({
        url: '/api/v1/expenses',
        method: 'GET',
      }),
      providesTags: ['expense'],
    }),
    createDetails: builder.mutation({
      query: data => {
        return {
          url: '/api/v1/expense',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['expense'],
    }),
  }),
});

export const {
  useFinanceDataQuery,
  useGetDetailsQuery,
  useCreateDetailsMutation,
} = expenseSlice;
