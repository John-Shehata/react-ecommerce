import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create thunk to fetch all categories cases
export const fetchCategoryCases = createAsyncThunk(
  "fetchCategoryCases",
  async () => {
    const res = await axios.get("http://localhost:5000/categoryShowCase");
    const data = res.data;
    return data;
  }
);

// Create thunk to fetch selected category only
export const fetchSingleCategory = createAsyncThunk(
  "fetchSingleCategory",
  async (categorySelected) => {
    const res = await axios.get("http://localhost:5000/categoryShowCase");
    const data = res.data;
    const filteredData = data.filter((item) => {
      return item.cate === categorySelected;
    });
    return filteredData;
  }
);

// All state is here
const initialState = {
  allCategories: [],
  selected: [],
};

export const categoryShowCaseSlice = createSlice({
  name: "categoryShowCaseSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryCases.fulfilled, (state, action) => {
      state.allCategories = action.payload;
      state.selected = action.payload;
    });
    builder.addCase(fetchSingleCategory.fulfilled, (state, action) => {
      state.selected = action.payload;
    });
  },
});

export default categoryShowCaseSlice.reducer;
