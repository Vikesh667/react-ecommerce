import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './AuthApi';
import {createUser} from "./AuthApi"

const initialState = {
  value: 0,
  status: 'idle',
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);

    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'user',
  initialState,
 
  reducers: {
    increment: (state) => {
    
      state.value += 1;
    },
   incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser= action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;


export const selectCount = (state) => state.counter.value;

export const selectLoggedInUser=(state)=>state.auth.loggedInUser
export default counterSlice.reducer;
