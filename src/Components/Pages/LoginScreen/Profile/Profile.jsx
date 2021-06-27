import React from 'react'
import Navbar from "../../../Navbar/Navbar"
import logo from '../../../../assests/images/avatar.png'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../features/counter/userSlice'
import { auth } from '../../../../firebase'

const Profile = () => {
  const user = useSelector(selectUser)
  return (
    <div className = 'profile'>
      <Navbar/>    
        <div className="profile-body">
        <h1>Edit Profile </h1>
          <div className="profile-info">
            <img src={logo} alt="" />
            <div className="profile-details">
              <h2>{user.email}</h2>

              {/* <div className="profile-plans">
                <h3>Plans</h3>
              </div> */}
              <button className = 'profile-signOut' onClick = {()=>{auth.signOut()}}>Sign Out</button>
            </div>
          
          </div>


        </div>
    </div>
  )
}
export default Profile
