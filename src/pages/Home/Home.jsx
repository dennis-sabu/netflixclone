import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar';
import hero_banner from  '../../assets/hero_banner.jpg' // Assuming you have a hero banner image in assets
import hero_title from '../../assets/hero_title.png' // Assuming you have a hero title image in assets
import play_icon from '../../assets/play_icon.png' // Assuming you have a play icon image in assets
import info_icon from '../../assets/info_icon.png' // Assuming you have an info icon image in
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'






const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div className='hero'>
       <img src={hero_banner} alt="Hero Banner" className='banner-img' />
       <div className='hero-caption'> 
        <img src={hero_title} alt="Hero Title" className='caption-img' />
        <p>Discover his ties to a secret ancient order,  a young man living in modern istanbul embarks on  a quest to save the city from a immortal enemy.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="Play" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="Info" />More Info</button>
        </div>
        <TitleCards />
       </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbusters"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Picks for you"} />
       
      </div>
      <Footer />
     
    </div>
  )
}

export default Home