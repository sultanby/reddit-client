import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let headers = {
    "User-Agent"   : "codecademt:go:v2.1 (by /u/sultan)"
};

let urlBase = 'https://api.reddit.com/r';
let SUBREDDIT_ALL = '/all/';
let JSON = '.json';


export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async ({params}) => {
        const data = await fetch(urlBase + SUBREDDIT_ALL + ( params && Object.keys(params).length === 0 ? 'hot' : params.filter ) + JSON, {
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