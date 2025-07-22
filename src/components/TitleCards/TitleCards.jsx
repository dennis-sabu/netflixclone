import React, { useRef, useEffect } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data' // Assuming you have a data file for cards





const TitleCards = ({title}) => {

  const cardsRef = useRef();

const handlewheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(() => {
  cardsRef.current.addEventListener('wheel', handlewheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className='card' key={index}>
            <img src={card.image} alt={card.title} />
            
            <p>{card.name}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default TitleCards