import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './api/apiSlice';
import userReducer from './data/auth/userSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
