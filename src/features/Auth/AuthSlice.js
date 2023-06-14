import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './AuthApi';
import {createUser,checkUser} from "./AuthApi"


const initialState = {
  value: 0,
  status: 'idle',
  error:null
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);

    return response.data;
  }
);


export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);

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
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser= action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error= action.error;
      });
  },
});

export const { increment } = counterSlice.actions;


export const selectCount = (state) => state.counter.value;

export const selectLoggedInUser=(state)=>state.auth.loggedInUser
export const selectError=(state)=>state.auth.error
export default counterSlice.reducer;
