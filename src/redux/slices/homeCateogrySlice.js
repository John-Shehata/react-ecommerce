import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create thunk to fetch all home categories
export const fetchHomeCategories = createAsyncThunk(
  "fetchHomeCategories",
  async () => {
    const res = await axios.get("http://localhost:5000/homeCategory");
    const data = res.data;
    return data;
  }
);

export const homeCategorySlice = createSlice({
  name: "homeCategorySlice",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchHomeCategories.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default homeCategorySlice.reducer;
