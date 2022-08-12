import React from "react";
// import { allPosts } from '../../mocks/posts';
import Post from "../Post/Post";
import "./AllPosts.css";
import { selectAllPosts } from "./AllPostsSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "./AllPostsSlice";

function AllPosts() {
  const allPosts = useSelector(selectAllPosts);
  //console.log(allPosts);
  const { isLoading } = useSelector((state) => state.allPosts);
  //console.log(isLoading);

  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts({params}));
  }, [dispatch, params]);

  return (
    <div className="all-posts-container">
      {allPosts.map((post, index) => (
        <Post
          subreddit={post.data.subreddit}
          title={post.data.title}
          image={post.data.url}
          num_comments={post.data.num_comments}
          id={post.data.id}
          votes={post.data.ups}
          author={post.data.author}
          post_hint={post.data.post_hint}
          url={post.data.url}
          video_src={
            post.data.secure_media?.reddit_video?.fallback_url
          }
          key={index}
        />
      ))}
    </div>
  );
}

export default AllPosts;
