import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch popular tags
export const fetchPopularTags = createAsyncThunk(
  "fetchPopularTags",
  async () => {
    const res = await axios.get("http://localhost:5000/popularTags");
    const data = res.data;
    return data;
  }
);

// Create a thunk to fetch popular posts
export const fetchPopularPosts = createAsyncThunk(
  "fetchPopularPosts",
  async () => {
    const res = await axios.get("http://localhost:5000/popularPosts");
    const data = res.data;
    return data;
  }
);

const initialState = {
  tags: [],
  posts: [],
};

export const postsTagsSlice = createSlice({
  name: "postsTagsSlice",
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase(fetchPopularTags.fulfilled, (state, action) => {
      state.tags = action.payload;
    });
    bulider.addCase(fetchPopularPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsTagsSlice.reducer;
