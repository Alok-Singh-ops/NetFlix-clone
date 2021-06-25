import React,{useState} from 'react'
import logo from "../../assests/images/netflix-logo.png";
import avatar from "../../assests/images/avatar.png";
import './navbar.css'

const Navbar = () => {
  const [show,setShow] = useState(false);


  const showNavbar = ()=>{
    if (window.scrollY>100) {
      setShow(true);
    }
    else{
      setShow(false);
    }
  }

  useState(() => {
    window.addEventListener('scroll',showNavbar);
   
    return () => window.removeEventListener('scroll',showNavbar)
  },[]
  )


  return (
    <nav className = {`nav ${show && 'nav-black'}`}>
      <div className="nav-contents">
        <img className = 'nav-logo' src = {logo} alt = 'NetFlix' />
        <img className = 'nav-avatar' src={avatar} alt = 'User' />
      </div>
    </nav>
  )
}

export default Navbar
