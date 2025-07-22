import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' // Assuming you have a logo image in assets
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg' // Assuming you have a search icon in assets
import profile_img from '../../assets/profile_img.png' // Assuming you have a profile icon in assets
import caret_icon from '../../assets/caret_icon.svg' // Assuming you have a second profile icon in assets
import { auth } from '../firebase'; // Importing Firebase auth
import { signOut } from 'firebase/auth'; // Importing signOut function from Firebase auth


const handleSignOut = async () => {
  try {
    await signOut(auth);
    window.location.href = "/"; // yooo gone to login
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />

        <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>

      </div>


      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="icons" />
        <p>Children</p>
       <img src={bell_icon} alt="Notifications" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Profile"  />

        <div className='dropdown'>
          <p  onClick={handleSignOut}>Sign Out Of Netflix</p>
        </div>


        </div>


      </div>
    
      

    
    </div>
  )
}

export default Navbar