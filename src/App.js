import { useState } from 'react';
import './css/App.css';
import Api from './Api/Api';
import MainContent from './components/MainContent';
import Header from './components/Header';


function App() {
  const [weather,setWeather] = useState({
    temp : 0,
    temp_min : 0,
    temp_max : 0,
    sky: '',
  })

  return (
    <div className='main'>
      <Api setWeather={setWeather}/>
      <Header />
      <MainContent weather={weather} />
      
    </div>
  );
}

export default App;
