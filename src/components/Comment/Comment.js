import React from "react";
import { timeConverter } from "../../utils/timeConverter";
import './Comment.css';
import Markdown from "markdown-to-jsx";


function Comment({ author, body, created }) {
  let time = timeConverter(created)
  return (
    <div className='comment-container'>
      <p className="author">{author}</p>
      <Markdown options={{ wrapper: 'article' }}>{body}</Markdown>
      <h6>{time}</h6>
    </div>
  );
}

export default Comment;
