import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import SearchPage from './pages/SearchPage';
import NewsPage from './pages/NewsPage';
import News from './components/News';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/ne">
            <News />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
