import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let headers = {
    "User-Agent"   : "codecademt:go:v2.1 (by /u/sultan)"
};


export const loadSubredditList = createAsyncThunk(
    'subredditList/getSubredditList',
    async () => {
        const data = await fetch('https://www.reddit.com/subreddits/popular.json', {
            headers: headers
          });
        console.log(data);
        const json = await data.json();
        return json.data.children;
    }
);

export const subredditListSlice = createSlice({
    name: 'subredditList',
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadSubredditList.pending]: (state, action) => {
            state.isLoading = true;
            console.log(state.subreddits);
            state.hasError = false;
        },
        [loadSubredditList.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            console.log(state.subreddits);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSubredditList.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action);
            state.hasError = true;
        }
    }
});

export const selectSubredditList = (state) => state.subredditList.subreddits;

export default subredditListSlice.reducer;