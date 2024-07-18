import React, { useEffect, useState } from 'react';
import './Player.css';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Corrected usage of useNavigate

  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "" // Note: You might want to rename this property to avoid confusion with reserved keywords like 'type'
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM0N2NiYjhjZDc4NGE0ZWQ4NzBkMjIxYWMxMzZjYiIsIm5iZiI6MTcyMTIwMTIyMS42NzIxNzIsInN1YiI6IjY2OTc2ZjdhNDQ4YjBjY2M1NWE5ZmE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOtUVakRJb_oTRywb4cFNIKhJmVZXU1Q2Im0-MWqZBo'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setapiData(response.results[0]))
      .catch(err => console.error(err));
  }, [id]); // Added dependency array to useEffect

  return (
    <div className='player'>
      <button onClick={() => navigate(-1)} className='backbutton'> 
        <FaArrowAltCircleLeft className='playericon' />
      </button>

      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} />
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
