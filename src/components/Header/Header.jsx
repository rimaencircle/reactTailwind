import React, { useState, useEffect } from 'react';
import NetflixLogo from '../../images/Logonetflix.png'
import { Link } from 'react-router-dom';
import searchImage from './../../images/magnifying-glass.png';
import sunImage from './../../images/sun.png';
import halfMoon from './../../images/half-moon.png';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Add or remove 'overflow: hidden' to the body tag when the component mounts or updates
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    // Clean up the effect by removing the style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <>
      <header className='gap-11 py-10 tablet:hidden'>
        <div className='container-fluid'>
          <div className='flex justify-between items-center'>
            <div className='logo max-w-200 mr-40'>
                <img src={NetflixLogo} alt="logo" />
            </div>  
            <div className='flex-auto justify-center dark:text-white menu'>
              <ul className='flex gap-10 justify-center'>
                <li>
                 <Link to="/">Home</Link>  
                </li>
                <li>
                  <Link to="/tv-shows">TV shows</Link>
                </li>
                <li>
                 <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/original">Originals</Link>
                </li>
              </ul>
            </div>
            <div className='flex gap-10 capitalize'>
              <button onClick={togglePopup} className='seachButton capitalize dark:text-white'>search <img src={searchImage} alt=""  className='seachButton__image'/></button>
              <div className={`search-popup ${isOpen ? 'show' : ''}`}>
                <div className='search-form'>
                  <div className='form-wrapper'>
                      <input type="text" placeholder="Search..."/>
                      <button onClick={togglePopup} className='close-icon'>Close</button>
                  </div>
                </div>
              </div>
              <button className='capitalize dark:text-white'>sign up</button>
              <button onClick={toggleDarkMode}>
                {darkMode ? <img src={halfMoon} alt="" /> : <img src={sunImage} alt="" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <header className='mobile-menu py-5 tabletMin:hidden'>
        <div className='container-fluid'>
            <div className='flex justify-between items-center'>
              <div className='logo max-w-150'>
                  <img src={NetflixLogo} alt="logo"/>
            </div> 
            <div className='flex gap-5'>
              <button onClick={togglePopup} className='seachButton'>search <img src={searchImage} alt="" className='seachButton__image' /></button>
              <button className='toggleBtn'>toggle</button>
              <div className={`search-popup ${isOpen ? 'show' : ''}`}>
                <div className='search-form'>
                  <div className='form-wrapper'>
                      <input type="text" placeholder="Search..."/>
                      <button onClick={togglePopup} className='close-icon'>Close</button>
                  </div>
                </div>
              </div>

            </div>
              
            </div>
        </div>
      </header>
      <section className='mobile-menu hidden'>
          <ul>
              <Link to="/">Home</Link>  
              <Link to="/tv-shows">TV shows</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/original">Originals</Link>
          </ul>
      </section>
    </>
  );
}


export default Header;