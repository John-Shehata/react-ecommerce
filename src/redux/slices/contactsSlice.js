import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch contacts
export const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  const res = await axios.get("http://localhost:5000/contacts");
  const data = res.data;
  return data;
});

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState: [],
  extraReducers: (bulider) => {
    bulider.addCase(fetchContacts.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default contactsSlice.reducer;
