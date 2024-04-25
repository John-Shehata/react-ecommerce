import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch social media
export const fetchSocialMedia = createAsyncThunk("fetchSocialMedia", async () => {
  const res = await axios.get("http://localhost:5000/socialMedia");
  const data = res.data;
  return data;
});

export const socialMediaSlice = createSlice({
  name: "socialMediaSlice",
  initialState: [],
  extraReducers: (bulider) => {
    bulider.addCase(fetchSocialMedia.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default socialMediaSlice.reducer;
