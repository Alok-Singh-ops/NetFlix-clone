import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./Components/Pages/HomeScreen/HomeScreen";
import Video from "./Components/Pages/Movie/Movie.jsx";
import Search from "./Components/Pages/Search//Search";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route exact path='/video'>
            <Video></Video>
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
