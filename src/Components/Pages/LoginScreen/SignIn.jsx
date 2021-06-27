import React, { useRef } from 'react'
import './signIn.css'
import firebase, { auth } from '../../../firebase'
const SignIn = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const formRef = useRef(null);

  const handleSignUp = (e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      ).then((user)=>console.log(user)).catch((err)=>alert(err));
  }

  const handleSignIn = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((user)=> console.log(user)).catch((err)=>alert(err));
  }


  return (
    <div className = "signin-page">
      <h2>Sign In</h2>
      <form action="" ref = {formRef} >
        <input ref={emailRef} placeholder = "Email" type = "email" />
        <input ref = {passwordRef} placeholder = "Password" type = "password" />
        <button type = "submit" className = 'btn btn-signIn' onClick = {handleSignIn}>Sign In</button>
        <h4>
          <span  className = 'form-new'>New to Netflix?</span>
          <span  className  ='form-sign-in' onClick = {handleSignUp}> Sign Up Now!</span>
        </h4>
      </form>
      
    </div>
  )
}

export default SignIn
