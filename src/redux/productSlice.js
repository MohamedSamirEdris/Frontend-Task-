import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const res = await axios.get('http://demo9849378.mockable.io/products');
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlics = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      // using lib called immer to update state in new way not the old one need to spreed state then get new one.
      state.status = 'pending';
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default productsSlics.reducer;
