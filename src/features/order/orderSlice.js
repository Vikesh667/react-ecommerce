import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderApi';

const initialState = {
  orders:[],
  status: 'idle',
  currentOrder:null
};

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await createOrder(order);

    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'counter',
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
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder=action.payload
      });
  },
});

export const { increment } = orderSlice.actions;


export const selectCurrentOrder= (state) => state.order.currentOrder;


export default orderSlice.reducer;
