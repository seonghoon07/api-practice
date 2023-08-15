import { useState } from 'react';
import './css/App.css';
import Api from './Api/Api';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [weather,setWeather] = useState({
    temp : 0,
    temp_min : 0,
    temp_max : 0,
    sky: '',
  })

  return (
    <BrowserRouter>
      <div className='main'>
        <Api setWeather={setWeather}/>
        <Header />
        <MainContent weather={weather} />
      </div>
    </BrowserRouter>
  );
}

export default App;
