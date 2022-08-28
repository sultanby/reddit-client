import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound({ error }) {
  return (
    <div className="not-found">
      <h1>
        Page Not Found :( <br />
      </h1>
      <h4>the page you requested does not exist</h4>
      <Link to={"/"}>
        <h3> go to feed</h3>
      </Link>
    </div>
  );
}

export default PageNotFound;
