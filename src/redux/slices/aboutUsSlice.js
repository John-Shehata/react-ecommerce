import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch about us data
export const fetchAboutUs = createAsyncThunk("fetchAboutUs", async () => {
  const res = await axios.get("http://localhost:5000/aboutUs");
  const data = res.data;
  return data;
});

export const aboutUsSlice = createSlice({
  name: "aboutUsSlice",
  initialState: [],
  extraReducers: (bulider) => {
    bulider.addCase(fetchAboutUs.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default aboutUsSlice.reducer;
