import React from "react";
import AllPosts from "../AllPosts/AllPosts";
import FilterBar from "../FilterBar/FilterBar";
import SubredditList from "../SubredditList/SubredditList";
import "./Feed.css";
import { useParams } from "react-router-dom";

function Feed() {
  const params = useParams();
  return (
    <div id='feed-container'>
        {params.subreddit ? <header>welcome to r/{params.subreddit}</header> : null}
      <div id="home-grid">
        <FilterBar />
        <AllPosts />
        <SubredditList />
      </div>
    </div>
  );
}

export default Feed;
