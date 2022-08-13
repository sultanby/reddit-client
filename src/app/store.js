import { configureStore } from "@reduxjs/toolkit";
import allPostsReducer from '../components/AllPosts/AllPostsSlice';
import subredditListReducer from '../components/SubredditList/SubredditListSlice';
import searchReducer from '../components/SearchBar/SearchSlice';

export default configureStore({
    reducer: {
        allPosts: allPostsReducer,
        subredditList: subredditListReducer,
        search: searchReducer
    },
});