import React, { useEffect } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./Components/Pages/HomeScreen/HomeScreen";
import Video from "./Components/Pages/Movie/Movie.jsx";
import Search from "./Components/Pages/Search//Search";
import "./App.css";

import LoginScreen from "./Components/Pages/LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubs = auth.onAuthStateChanged((user) => {
      if (user) {
        //login
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        //logout
        dispatch(logout);
      }
    });
    return unSubs;
  }, []);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
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
            <Route exact path='/login'>
              <Search />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
