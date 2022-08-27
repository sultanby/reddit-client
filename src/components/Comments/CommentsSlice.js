import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let headers = {
    //"User-Agent"   : "codecademt:go:v2.1 (by /u/sultan)"
};


export const loadComments = createAsyncThunk(
    'comments/getComments',
    async (url) => {
        const data = await fetch(url, {
            headers: headers
          });

        if (!data.ok) {
            throw Error(data.status);
        }
        const json = await data.json();
        return json;
    }
);

export const commentsSlice = createSlice({
    name: 'allComments',
    initialState: {
        comments: [],
        post: {},
        isLoading: false,
        hasError: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.comments = action.payload[1].data.children;
            state.post = action.payload[0].data.children[0].data;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.hasError = true;
        }
    }
});

export const selectAllComments = (state) => state.allComments.comments;
export const selectPostInfo = (state) => state.allComments.post;

export default commentsSlice.reducer;