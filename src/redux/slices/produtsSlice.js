import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch all products from server
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:5000/products");
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// All state is here
const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add products to state
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
