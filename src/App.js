import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import PostView from "./components/PostView/PostView";

function App() {
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
          </Route>*/}
        <Route path={"/r/:subreddit/:filter"}>
          <Feed />
        </Route>
        <Route path={"/r/:subreddit/"}>
          <Feed />
        </Route>
        <Route path={"/:filter"}>
          <Feed />
        </Route>
        <Route exact path="/">
          <Feed />
        </Route>
      </Switch>
    </>
  );
}

export default App;
