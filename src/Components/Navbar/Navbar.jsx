import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assests/images/netflix-logo.png";
import SearchForm from '../SearchForm/SearchForm';
import avatar from "../../assests/images/avatar.png";
import './navbar.css'

const Navbar = () => {
  const [show,setShow] = useState(false);
  // const [text,setText] = useState('');

  // const history = useHistory();

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

  // const history = useHistory();
  // const handleChange = (e)=>{
  //   setText(e.target.value)
  // }

  // const handleSubmit = (e)=>{
    
  //   history.push({
  //     pathname: '/search',
  //     state: {
  //       search: text
  //     }
  //   })
  //   setText('');
  // }


  return (
    <nav className = {`nav ${show && 'nav-black'}`}>
      <div className="nav-contents">
        <Link to = '/'>
          <img className = 'nav-logo' src = {logo} alt = 'NetFlix' />
        </Link>
        <SearchForm/>
        <img className = 'nav-avatar' src={avatar} alt = 'User' />
      </div>
    </nav>
  )
}

export default Navbar
