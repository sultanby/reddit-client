import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <>
      <Header />
      <Feed />
      {/* <Router>
         <Switch>
          <Route path={"/page-not-found"}>
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
          </Route>
          <Route path={"/"}>
            <Feed />
          </Route>
        </Switch> 
      </Router> */}
    </>
    
  );
}

export default App;
