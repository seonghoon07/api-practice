import React from 'react';
import './style.css'

const Header = () => {
  return (
    <header>
      <nav>
        <button className='header_button'>기온</button>
        <button className='header_button'>시간별 예보</button>
        <button className='header_button'>날짜별 예보</button>
        <button className='header_button'>그 외</button>
      </nav>
    </header>
  );
};

export default Header;