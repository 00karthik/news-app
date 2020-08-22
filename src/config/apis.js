import { OPEN_WEATHER_KEY, GNEWS_KEY } from './keys';

export const WeatherApi = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_KEY}`;
export const IpApi = 'https://wtfismyip.com/json';
export const NewsApi = (query, lang, cc = 'us') =>
  `https://gnews.io/api/v3/search?q=${query}&lang=${lang}&image=true&country=${cc}&token=${GNEWS_KEY}&max=30`;
