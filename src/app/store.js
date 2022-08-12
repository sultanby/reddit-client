import { configureStore } from "@reduxjs/toolkit";
import allPostsReducer from '../components/AllPosts/AllPostsSlice';
import subredditListReducer from '../components/SubredditList/SubredditListSlice';

export default configureStore({
    reducer: {
        allPosts: allPostsReducer,
        subredditList: subredditListReducer
    },
});