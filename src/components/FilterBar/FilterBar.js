import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import "./FilterBar.css";
import hotIcon from "../../assets/flame-24.png";
import newIcon from "../../assets/new-24.png";
import topIcon from "../../assets/top-24.png";

function FilterBar() {
  const filters = [
    {
      index: 1,
      type: "hot",
      src: hotIcon,
    },
    {
      index: 2,
      type: "new",
      src: newIcon,
    },
    {
      index: 3,
      type: "top",
      src: topIcon,
    },
  ];
  let { path, url } = useRouteMatch();
  const params = useParams();
  const url_help = `r/${params.subreddit}`;

  return (
    <div className="filter-bar">
      {filters.map((filter) => {
        if (params.subreddit && path === "/r/:subreddit/")
          return (
            <Link to={`${url}/${filter.type}`} key={filter.index}>
              <button>
                <img src={filter.src} alt="filter icon" />
                <span>{filter.type}</span>
              </button>
            </Link>
          );
        else if (Object.keys(params).length === 2)
          return (
            <Link to={`/${url_help}/${filter.type}`} key={filter.index}>
              <button>
                <img src={filter.src} alt="filter icon" />
                <span>{filter.type}</span>
              </button>
            </Link>
          );
        return (
          <Link to={`/${filter.type}`} key={filter.index}>
            <button>
              <img src={filter.src} alt="filter icon" />
              <span>{filter.type}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default FilterBar;
