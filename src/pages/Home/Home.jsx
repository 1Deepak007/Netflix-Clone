import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src="https://images2.alphacoders.com/879/thumb-1920-879599.png" className='banner-img' alt="" />
        <div className="hero-caption">
          <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
          <div className="hero-btns">
            <button className='btn'><FaPlay /> Play </button>
            <button className='btn dark-btn'><MdInfoOutline /> More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Tops picks for you"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
