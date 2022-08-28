import React from "react";
import { Link } from "react-router-dom";
import "./Subreddit.css";

function Subreddit({ subreddit, url }) {
  return (
    <div className="subreddit">
      <Link to={`/${url}`}>{subreddit}</Link>
    </div>
  );
}

export default Subreddit;
