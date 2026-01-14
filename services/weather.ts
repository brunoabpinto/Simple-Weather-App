import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHER_KEY';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: { description: string; icon: string }[];
}

export const getWeather = async (city: string): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};