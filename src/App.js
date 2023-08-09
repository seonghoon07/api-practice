import { useState } from 'react';
import './css/App.css';
import './css/Background.css'
import Api from './Api/Api';


function App() {
  const [weather,setWeather] = useState({
    temp : 0,
    temp_min : '',
    temp_max : '',
  })

  return (
    <div className='main'>
      <Api setWeather={setWeather}/>
      <div id='temp'>
        <h1>부산광역시</h1>
        <h2>{weather.temp}℃</h2>
      </div>
    </div>
  );
}

export default App;
