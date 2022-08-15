import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import "./FilterBar.css";

function FilterBar() {
  const filters = ["hot", "new", "top"];
  let { path, url } = useRouteMatch();
  //console.log(url + "    " + path);
  const params = useParams();
  //console.log(params);
  const url_help = `r/${params.subreddit}`

  return (
    <div className="filter-bar">
      {filters.map((filter, index) => {
        if (params.subreddit && path==="/r/:subreddit/") 
          return <Link to={`${url}/${filter}`} key={index}><button>{filter}</button></Link>
        else if (Object.keys(params).length === 2)
            return <Link to={`/${url_help}/${filter}`} key={index}><button>{filter}</button></Link>
        return <Link to={`/${filter}`} key={index}><button>{filter}</button></Link>
    })}
    </div>
  );
}

export default FilterBar;
