import React, { useState } from 'react'
import logo from "../../../assests/images/netflix-logo.png";
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import './loginScreen.css'

const LoginScreen = () => {

  const [signIn,setSignIn] = useState(false);
  const handleClick = ()=>{
    setSignIn(true);
  }

  return (

    <div className = 'loginScreen'>
      <div className="loginScreen-background">
        <Link to = '/'>
          <img src={logo} alt="" className = "loginScreen-logo" />
        </Link>
      </div>
      <button className="login-btn" onClick = {handleClick}>Sign in</button>

      <div className="bg-fade"></div>
      <div className="login-content">
        {signIn?<SignIn/> :

        <>
          <h1>Unlimited Films,TV Programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
          <h3>Ready to watch. Enter your email to create or restart your membership</h3>
          <div className="login-input">
           <form action="">
            <button className = "login-screen-get-button" onClick = {handleClick}>Get Started </button>
           </form>
          </div>
        </>
        }

      </div>
    </div>
  )
}

export default LoginScreen
