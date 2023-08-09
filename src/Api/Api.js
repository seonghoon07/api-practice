import axios from 'axios';
import React, { useEffect } from 'react';

const Api = ({setWeather}) => {

  const API_ADDRESS = "287b2a1c5e56ff945a281d282236b623"
  const url =`https://api.openweathermap.org/data/2.5/weather?q=Busan,kr&appid=${API_ADDRESS}`

  useEffect(() => {
    axios.get(url)
    .then(response => {
      const data = response.data
      console.log(data)
      setWeather({
        temp: parseInt(data.main.temp)-273,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
      })})
  },[])
};

export default Api;