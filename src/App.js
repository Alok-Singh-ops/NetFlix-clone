import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Video from "./Components/Video";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
