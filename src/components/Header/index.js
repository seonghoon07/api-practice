import React from 'react';
import './style.css'

const Header = () => {
  return (
    <header>
      <button>기온</button>
      <button>시간별 예보</button>
      <button>날짜별 예보</button>
      <button>그 외</button>
    </header>
  );
};

export default Header;