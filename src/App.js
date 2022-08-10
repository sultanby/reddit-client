
import { useDispatch } from "react-redux";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import PostView from "./components/PostView/PostView";
import { loadPosts } from "./components/AllPosts/AllPostsSlice";
import { useEffect } from "react";


function App() {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        {/* <Route path={"/page-not-found"}>
            <PageNotFound />
          </Route>
          <Route path={"/search"}>
            <SearchPage />
          </Route>
          <Route path={"/r/:subreddit/comments/:id/:title"}>
            <Post />
          </Route>
          <Route path={"/r/:subreddit/:filter"}>
            <Feed />
          </Route>
          <Route path={"/:filter"}>
            <Feed />
          </Route> */}
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/comments">
          <PostView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
