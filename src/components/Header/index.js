import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <header>
      <nav>
        <Link className='header_button'>기온</Link>
        <Link className='header_button'>시간별 예보</Link>
        <Link className='header_button'>날짜별 예보</Link>
        <Link className='header_button'>그 외</Link>
      </nav>
    </header>
  );
};

export default Header;