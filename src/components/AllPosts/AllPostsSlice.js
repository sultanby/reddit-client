import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../SearchBar/SearchSlice";

let headers = {
  //"User-Agent": "codecademt:go:v2.1 (by /u/sultan)",
};

export const loadPosts = createAsyncThunk(
  "allPosts/getAllPosts",
  async (url) => {
    const data = await fetch(url, {
      headers: headers,
    });
    const json = await data.json();

    if (!data.ok) {
      throw Error(data.status);
    }

    return json.data.children;
  }
);

export const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.hasError = true;
    },
  },
});

export const selectAllPosts = (state) => state.allPosts.posts;

export const selectFilteredAllPosts = (state) => {
  const allPosts = selectAllPosts(state);
  const searchTerm = selectSearchTerm(state);

  return allPosts.filter((post) => {
    return post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

export default allPostsSlice.reducer;
