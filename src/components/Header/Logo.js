import React from 'react';
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Reddit logo" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
