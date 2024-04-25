import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch all locations sprade
export const fetchLocations = createAsyncThunk("fetchLocations", async () => {
  const res = await axios.get("http://localhost:5000/locationSprade");
  const data = res.data;
  return data;
});

export const locationsSlice = createSlice({
  name: "locationsSlice",
  initialState: [],
  extraReducers: (bulider) => {
    bulider.addCase(fetchLocations.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default locationsSlice.reducer;
