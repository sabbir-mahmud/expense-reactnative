import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
let initialState = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const token = action.payload;
      AsyncStorage.setItem('token', token)
        .then(() => {
          console.log('Token saved to local storage');
        })
        .catch(error => {
          console.error('Failed to save token:', error);
        });

      return token; // Update state with the token
    },
    userLogout: state => {
      // Remove token from AsyncStorage
      AsyncStorage.removeItem('token')
        .then(() => {
          console.log('Token removed from local storage');
        })
        .catch(error => {
          console.error('Failed to remove token:', error);
        });

      return null; // Reset state
    },
    setToken: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const {userLogin, userLogout, setToken} = userSlice.actions;

export default userSlice.reducer;
