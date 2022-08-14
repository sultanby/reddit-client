import React from "react";
import { Link } from "react-router-dom";
import commentLogo from "../../assets/comments-24.png";
import "./Post.css";

function Post({
  subreddit,
  title,
  image,
  num_comments,
  id,
  votes,
  author,
  post_hint,
  url,
  video_src,
  comment_link
}) {
  return (
    <div className="post-container">
      <h5>r/{subreddit}</h5>
      <h4>{title}</h4>
      <p>{post_hint}</p>
      {post_hint === "image" && <img src={image} />}
      {post_hint === "link" && <p>{url}</p>}
      {post_hint === "hosted:video" && (
        <video width='300px' controls>
          <source
            src={video_src}
            type="video/mp4"
          ></source>
        </video>
      )}
      <p>{votes}</p>
      <div className="down-section">
        <p>{author}</p>
        <Link to={`${comment_link}`}>
          <button className="comment-button">
            <img src={commentLogo} />
            <p>{num_comments}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Post;
