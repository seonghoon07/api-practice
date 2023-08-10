import React from 'react';
import './style.css'

const MainContent = ({weather}) => {
  return (
    <div id='MainBox-layout'>
      <div id='MainBox'>
        <h2>부산광역시</h2>
        <h1>{weather.temp}℃</h1>
        <h3>{weather.sky}</h3>
        <div id='maxmin'>
          <h3>최고:{weather.temp_max}</h3>
          <h3>최저:{weather.temp_min}</h3>
        </div>
      </div>
    </div>
    
  );
};

export default MainContent;