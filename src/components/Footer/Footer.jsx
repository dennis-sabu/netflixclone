import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png' // Assuming you have a YouTube icon image in assets
import facebook_icon from '../../assets/facebook_icon.png' // Assuming you have a Facebook icon image in assets
import twitter_icon from '../../assets/twitter_icon.png' // Assuming you have a Twitter icon image in assets
import instagram_icon from '../../assets/instagram_icon.png' // Assuming you have an Instagram icon image

const Footer = () => {
  return (
   <div className='footer'>
     <div className='footer-icon'>
      <img src={youtube_icon} alt="YouTube" />
      <img src={facebook_icon} alt="Facebook" />
      <img src={twitter_icon} alt="Twitter" />
      <img src={instagram_icon} alt="Instagram" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
      
    </ul>
    <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>
   </div>
  )
}

export default Footer