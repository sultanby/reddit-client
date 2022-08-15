import React from "react";
import { timeConverter } from "../../utils/timeConverter";
import './Comment.css';

function Comment({ author, body, created }) {
  let time = timeConverter(created)
  return (
    <div className='comment-container'>
      <p className="author">{author}</p>
      <p>{body}</p>
      <h6>{time}</h6>
    </div>
  );
}

export default Comment;
