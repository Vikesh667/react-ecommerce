import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart,deleteItemFromCart,fetchItemByUserId,updateCart, } from './CartApi';

const initialState = {
  value: 0,
  status: 'idle',
  item:[]
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (userId) => {
    const response = await addToCart(userId);

    return response.data;
  }
);


export const fetchItemByUserIdAsync= createAsyncThunk(
  'cart/fetchItemByUserId',
  async (item) => {
    const response = await fetchItemByUserId(item);

    return response.data;
  }
);
export const updateCartAsync= createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await updateCart(update);

    return response.data;
  }
);
export const deleteItemFromCartAsync= createAsyncThunk(
  'cart/deleteItemFromCart',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);

    return response.data;
  }
);
export const counterSlice = createSlice({
  name: 'cart',
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
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.item.push(action.payload)
      })
      .addCase(fetchItemByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.item=action.payload
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.item.findIndex(item=>item.id===action.payload.id)

        state.item[index]=action.payload
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.item.findIndex(item=>item.id===action.payload.id)

        state.item.splice(index,1);
      })
      
  },
});

export const { increment } = counterSlice.actions;


export const selectItems = (state) => state.cart.item;


export default counterSlice.reducer;
