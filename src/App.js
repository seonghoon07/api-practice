import axios from 'axios';
import './App.css';

// api 287b2a1c5e56ff945a281d282236b623
function App() {
  const API_ADDRESS = "287b2a1c5e56ff945a281d282236b623"
  const url =`https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=${API_ADDRESS}`

  axios.get(url).then(response => console.log(response))
  return (
    <div className='base'>
      
    </div>
  );
}

export default App;
