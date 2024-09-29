import {createSlice} from '@reduxjs/toolkit';

let initialState = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {userLogin, userLogout} = userSlice.actions;

export default userSlice.reducer;
