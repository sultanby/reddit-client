import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let headers = {
    "User-Agent"   : "codecademt:go:v2.1 (by /u/sultan)"
};

let url = 'https://api.reddit.com/r/all.json'

export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async () => {
        const data = await fetch(url, {
            headers: headers
          });
        console.log(data);
        const json = await data.json();
        return json.data.children;
    }
);

export const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            console.log(state.posts);
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            console.log(state.posts);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action);
            state.hasError = true;
        }
    }
});

export const selectAllPosts = (state) => state.allPosts.posts;

export default allPostsSlice.reducer;