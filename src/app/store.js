import { configureStore } from "@reduxjs/toolkit";
import allPostsReducer from "../components/AllPosts/AllPostsSlice";
import subredditListReducer from "../components/SubredditList/SubredditListSlice";
import searchReducer from "../components/SearchBar/SearchSlice";
import commentsReducer from "../components/Comments/CommentsSlice";

const reducer = {
  allPosts: allPostsReducer,
  subredditList: subredditListReducer,
  search: searchReducer,
  allComments: commentsReducer,
};

export function getStoreWithState(preloadedState) {
  return configureStore({ reducer, preloadedState });
}

export default configureStore({ reducer });
