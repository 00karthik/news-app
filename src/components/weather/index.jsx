import React from 'react';
import UseWeather from '../../hooks/weather';
import './style.less';
import { Row, Space } from 'antd';

const Weather = () => {
  const weather = UseWeather();
  console.log(weather.data);
  return (
    <div>
      {weather.status !== 'loading' && weather.data && weather.data.main ? (
        <div>
          <Row justify="center" align="middle">
            <Space>
              <i className={`owf owf-${weather.data.weather[0].id} owf-3x`}></i>
              <h2>{Math.round(weather.data.main.temp)} °C</h2>
            </Space>
          </Row>
          <p>
            Feels like <b>{Math.round(weather.data.main.feels_like)}</b> °C
          </p>
          <p className="desc">{weather.data.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
