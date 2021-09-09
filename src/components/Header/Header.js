import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <Logo />
          <nav id="nav-bar">
            <ul style={{ fontFamily: 'montserrat' }} className="nav-links">
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <a href="#how-it-works" className="how-it-works">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#about" className="about">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
