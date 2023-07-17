import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUser, fetchLoggedInUserOrders,updateUser } from './userApi';


const initialState = {
  status: 'idle',
  userInfo:[]
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  'user/fetchLoggedInUserOrders',
  async () => {
    const response = await fetchLoggedInUserOrders();

    return response.data;
  }
);
export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async () => {
    const response = await fetchLoggedInUser();

    return response.data;
  }
);
export const UpdateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);

    return response.data;
  }
);

export const userSlice = createSlice({
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
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo.orders= action.payload;
      })
      .addCase(UpdateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(UpdateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo= action.payload;
      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo= action.payload;
      })
  },
});

export const selectUserOrders=(state)=>state.user.userInfo.orders
export const selectUserInfo=(state)=>state.user.userInfo
export const { increment } = userSlice.actions;


export const selectCount = (state) => state.counter.value;



export default userSlice.reducer;
