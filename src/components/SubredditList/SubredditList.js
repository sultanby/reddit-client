import React, { useEffect } from "react";
//import { todaysMostPopular } from '../../mocks/subreddits';
import Subreddit from "../Subreddit/Subreddit";
import "./SubredditList.css";
import { useSelector, useDispatch } from "react-redux";
import { selectSubredditList, loadSubredditList} from "./SubredditListSlice";

function SubredditList() {
  const subredditList = useSelector(selectSubredditList);
  //console.log("subreddditList component" + subredditList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubredditList());
  }, [dispatch]);

  return (
    <div className="subreddit-list-container">
      <h4>Hottest Communities</h4>
      {subredditList.map((subreddit) => (
        <Subreddit subreddit={subreddit.data.display_name} url={subreddit.data.display_name_prefixed} key={subreddit.data.id} />
      ))}
    </div>
  );
}

export default SubredditList;
