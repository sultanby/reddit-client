import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../SearchBar/SearchSlice';

let headers = {
    "User-Agent"   : "codecademt:go:v2.1 (by /u/sultan)"
};

// let urlBase = 'https://api.reddit.com/r';
// let SUBREDDIT_ALL = '/all/';
// let JSON = '.json';


export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async (url) => {
        const data = await fetch(url, {
            headers: headers
          });

        console.log(data);
        if (!data.ok) {
            console.log("hehe"+data.status);
            throw Error(data.status);
        }
        
        const json = await data.json();
        return json.data.children;
    }
);

export const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            //console.log(state.posts);
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            //console.log(state.posts);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.error.message);
            state.error = action.error.message;
            state.hasError = true;
        }
    }
});

export const selectAllPosts = (state) => state.allPosts.posts;

export const selectFilteredAllPosts = (state) => {
    const allPosts = selectAllPosts(state);
    const searchTerm = selectSearchTerm(state);
  
    return allPosts.filter((post) =>{
        //console.log(searchTerm);
        return post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
};

export default allPostsSlice.reducer;