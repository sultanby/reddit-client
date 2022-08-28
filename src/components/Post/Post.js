import React, { useState } from "react";
import { Link } from "react-router-dom";
import { timeConverter } from "../../utils/timeConverter";
import { voteCounter } from "../../utils/votes";
import "./Post.css";
import Markdown from "markdown-to-jsx";

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
  isSelftext,
  selftext,
}) {
  const [addend, setAddend] = useState(0);

  const changeUpVote = () => {
    setAddend((prevAddend) => (prevAddend === 1 ? 0 : addend + 1));
  };

  const changeDownVote = () => {
    setAddend((prevAddend) => (prevAddend === -1 ? 0 : addend - 1));
  };

  let time = timeConverter(created);
  let voteRounded = voteCounter(votes + addend);

  return (
    <article className="post-container">
      <span className="votes-sidepanel">
        <img
          src={addend > 0 ? 'https://img.icons8.com/external-those-icons-fill-those-icons/48/94f093/external-Up-interface-those-icons-fill-those-icons.png' : 'https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-Up-interface-those-icons-lineal-those-icons.png'}
          onClick={changeUpVote}
          alt="up vote button"
        />
        <div>{voteRounded}</div>
        <img
          src={addend < 0 ? 'https://img.icons8.com/external-those-icons-fill-those-icons/48/E87D7D/external-Down-interface-those-icons-fill-those-icons.png' : 'https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-Down-interface-those-icons-lineal-those-icons-2.png'}
          onClick={changeDownVote}
          alt="down vote button"
        />
      </span>
      <div className="post-main">
        <h6>
          <Link to={`/${subreddit}`}>{subreddit}</Link>
        </h6>
        <h3>{title}</h3>
        <div className="post-content">
          {post_hint === "image" && <img src={image} width="400px" alt={title} />}
          {post_hint === "link" && <a href={url}>{url}</a>}
          {post_hint === "hosted:video" && (
            <video width="400px" controls>
              <source src={video_src} type="video/mp4"></source>
            </video>
          )}

          {isSelftext && selftext.length > 0 && (
            <div
              className={
                isSinglePost ? "post-main-text-comments" : "post-main-text-feed"
              }
            >
              <Markdown>{selftext}</Markdown>
            </div>
          )}
        </div>
        <div className="down-section">
          <h6> by {author}</h6>
          <h6>{time}</h6>
          {isSinglePost ? (
            <div className="comment-button">
              <img src='https://img.icons8.com/ios/50/000000/comments.png' alt="comment icon" />
              <h6>{num_comments}</h6>
            </div>
          ) : (
            <Link to={`${comment_link}`}>
              <div className="comment-button">
                <img src='https://img.icons8.com/ios/50/000000/comments.png' alt="comment icon" />
                <h6>{num_comments}</h6>
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default Post;
