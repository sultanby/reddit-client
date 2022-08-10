import { configureStore } from "@reduxjs/toolkit";
import allPostsReducer from '../components/AllPosts/AllPostsSlice';

export default configureStore({
    reducer: {
        allPosts: allPostsReducer
    },
});