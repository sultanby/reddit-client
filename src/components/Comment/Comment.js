import React from "react";
import './Comment.css';

function Comment({ author, body, created }) {
  return (
    <div className='comment-container'>
      <p className="author">{author}</p>
      <p>{body}</p>
      <h6>{created}</h6>
    </div>
  );
}

export default Comment;
