import './App.css';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={'/page-not-found'}>
          <PageNotFound />
        </Route>
        <Route path={'/search'}>
          <SearchPage />
        </Route>
        <Route path={'/r/:subreddit/comments/:id/:title'}>
          <Post />
        </Route>
        <Route path={'/r/:subreddit/:filter'}>
          <Feed />
        </Route>
        <Route path={'/:filter'}>
          <Feed />
        </Route>
        <Route path={'/'}>
          <Feed />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
