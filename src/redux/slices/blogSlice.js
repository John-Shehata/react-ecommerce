import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk("fetchBlogs", async () => {
  const res = await axios.get("http://localhost:5000/blogs");
  const data = res.data;
  return data;
});

// Create a thunk to fetch selected blogs
export const fetchSelectedBlog = createAsyncThunk(
  "fetchSelectedBlog",
  async (id) => {
    const res = await axios.get(`http://localhost:5000/blogs/${id}`);
    const data = res.data;
    return data;
  }
);

// All state is here
const initialState = {
  blogs: [],
  selectedBlog: {},
};

export const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  extraReducers: (bulider) => {
    // All blogs
    bulider.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
    // Single blog was selected
    bulider.addCase(fetchSelectedBlog.fulfilled, (state, action) => {
      state.selectedBlog = action.payload;
    });
  },
});

export default blogSlice.reducer;
