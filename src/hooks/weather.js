import { useState, useEffect } from 'react';
import Axios from 'axios';
import { message } from 'antd';
import { WeatherApi } from '../config/apis';
const UseWeather = () => {
  // custom hook to get weather data
  const [weather, setWeather] = useState();
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    // call weather details api
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position, err) => {
        if (err) {
          message.error('Cannot fetch weather for your location');
          setStatus('error');
          return;
        }
        try {
          const response = await Axios.get(
            WeatherApi(position.coords.latitude, position.coords.longitude)
          );
          setStatus('success');
          setWeather(response.data);
        } catch (err) {
          // error handling
          setStatus('error');
          if (err.response.status === 404) {
            message.error('Cannot fetch weather for your location');
          } else {
            message.error('Unable fetch to weather data');
          }
        }
      });
    } else {
      setStatus('error');
      message.error('Geolocation is not supported by this browser');
    }
  }, []);
  // return weather details
  return { data: weather, status };
};

export default UseWeather;
