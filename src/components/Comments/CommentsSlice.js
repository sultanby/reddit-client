import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../SearchBar/SearchSlice';

let headers = {
    "User-Agent"   : "codecademt:go:v2.1 (by /u/sultan)"
};


export const loadComments = createAsyncThunk(
    'comments/getComments',
    async (url) => {
        const data = await fetch(url, {
            headers: headers
          });
        //console.log(data);
        const json = await data.json();
        return json[1].data.children;
    }
);

export const commentsSlice = createSlice({
    name: 'allComments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.isLoading = true;
            //console.log(state.comments);
            state.hasError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            //console.log(state.comments);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadComments.rejected]: (state, action) => {
            state.isLoading = false;
            //console.log(action);
            state.hasError = true;
        }
    }
});

export const selectAllComments = (state) => state.allComments.comments;

export default commentsSlice.reducer;