import { configureStore } from "@reduxjs/toolkit";
import allPostsReducer from '../components/AllPosts/AllPostsSlice';
import subredditListReducer from '../components/SubredditList/SubredditListSlice';
import searchReducer from '../components/SearchBar/SearchSlice';
import commentsReducer from '../components/Comments/CommentsSlice';

export default configureStore({
    reducer: {
        allPosts: allPostsReducer,
        subredditList: subredditListReducer,
        search: searchReducer,
        allComments: commentsReducer
    },
});