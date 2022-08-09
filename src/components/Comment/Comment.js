import React from "react";
import './Comment.css';

function Comment({ author, body }) {
  return (
    <div>
      <p>{author}: {body}</p>
    </div>
  );
}

export default Comment;
