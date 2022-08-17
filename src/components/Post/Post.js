import React, { useState } from "react";
import { Link } from "react-router-dom";
import commentLogo from "../../assets/comments-24.png";
import { timeConverter } from "../../utils/timeConverter";
import { voteCounter } from "../../utils/votes";
import "./Post.css";
import Markdown from "markdown-to-jsx";
import up from "../../assets/up-24.png";
import upPushed from "../../assets/up-pushed-24.png";
import down from "../../assets/down-24.png";
import downPushed from "../../assets/down-pushed-24.png";

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
  comment_link,
  isSinglePost,
  created,
  isSelf,
  selftext,
}) {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const changeUpVote = () => {
    if (!upVote) {
      setUpVote(true);
      setDownVote(false);
    } else {
      setUpVote(false);
      setDownVote(false);
    }
  };
  const changeDownVote = () => {
    if (!downVote) {
      setDownVote(true);
      setUpVote(false);
    } else {
      setDownVote(false);
      setUpVote(false);
    }
  };
  let time = timeConverter(created);
  let voteRounded = voteCounter(votes);
  return (
    <div className="post-container">
      <span className="votes-sidepanel">
        <img
          src={upVote ? upPushed : up}
          onClick={changeUpVote}
          alt="up vote button"
        />
        <div>{voteRounded}</div>
        <img
          src={downVote ? downPushed : down}
          onClick={changeDownVote}
          alt="down vote button"
        />
      </span>
      <div className="post-main">
        <h6>
          <Link to={`r/${subreddit}`}>r/{subreddit}</Link>
        </h6>
        <h3>{title}</h3>
        <div class="post-content">
          {post_hint === "image" && <img src={image} alt={title} />}
          {post_hint === "link" && <a href={url}>{url}</a>}
          {post_hint === "hosted:video" && (
            <video width="300px" controls>
              <source src={video_src} type="video/mp4"></source>
            </video>
          )}

          {isSelf && (
            <div className="post-main-text">
              <Markdown>{selftext}</Markdown>
            </div>
          )}
        </div>
        <div className="down-section">
          <h6> by {author}</h6>
          <h6>{time}</h6>
          {isSinglePost ? (
            <div className="comment-button">
              <img src={commentLogo} alt="comment icon" />
              <h6>{num_comments}</h6>
            </div>
          ) : (
            <Link to={`${comment_link}`}>
              <div className="comment-button">
                <img src={commentLogo} alt="comment icon" />
                <h6>{num_comments}</h6>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
