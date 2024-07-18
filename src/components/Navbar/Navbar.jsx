import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaRegBell } from "react-icons/fa";
import profile_img from '../../assets_1/netflix_profile.jpg';
import { IoMdArrowDropdown } from "react-icons/io";
import { logout } from '../../../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Error signing out, please try again.');
    }
  };

  return (
    <div ref={navRef} className="navbar">
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
      <div className="navbar-right flex items-center space-x-4">
        <FaSearch />
        <p className="hover:underline cursor-pointer">Children</p>
        <FaRegBell />
        <div className="navbar-profile">
          <img src={profile_img} className="profile" alt="profile" />
          <IoMdArrowDropdown />
          <div className="dropdown">
            <p onClick={handleLogout}>Signout of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
