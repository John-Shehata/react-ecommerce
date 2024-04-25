import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch about page data
export const fetchAbout = createAsyncThunk("fetchAbout", async () => {
  const res = await axios.get("http://localhost:5000/aboutPage");
  const data = res.data;
  return data;
});

export const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState: [],
  extraReducers: (bulider) => {
    bulider.addCase(fetchAbout.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default aboutSlice.reducer;
