import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import "./FilterBar.css";

function FilterBar() {
  const filters = [
    {
      index: 1,
      type: "hot",
      src: 'https://img.icons8.com/ios/50/000000/fire-element--v1.png',
    },
    {
      index: 2,
      type: "new",
      src: 'https://img.icons8.com/ios/50/000000/new.png',
    },
    {
      index: 3,
      type: "top",
      src: 'https://img.icons8.com/ios/50/000000/positive-dynamic.png',
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
