import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/card_data'
import {Link} from 'react-router-dom'


const TitleCards = ({ title, category }) => {

  const[apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM0N2NiYjhjZDc4NGE0ZWQ4NzBkMjIxYWMxMzZjYiIsIm5iZiI6MTcyMTIwMTIyMS42NzIxNzIsInN1YiI6IjY2OTc2ZjdhNDQ4YjBjY2M1NWE5ZmE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOtUVakRJb_oTRywb4cFNIKhJmVZXU1Q2Im0-MWqZBo'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err))
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  }

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"} </h2>
      <div className="card-list " ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} 
              alt={card.title} className="card-img" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
