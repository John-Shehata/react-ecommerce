import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch sponsors
export const fetchSponsors = createAsyncThunk("fetchSponsors", async () => {
  const res = await axios.get("http://localhost:5000/sponsors");
  const data = res.data;
  return data;
});

export const sponsorsSlice = createSlice({
  name: "sponsorsSlice",
  initialState: [],
  extraReducers: (bulider) => {
    bulider.addCase(fetchSponsors.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default sponsorsSlice.reducer;