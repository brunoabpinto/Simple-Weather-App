import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Loader from '../components/loader';
import WeatherCard from '../components/weather-card';
import { getWeather, WeatherData } from '../services/weather';

export default function WeatherScreen() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const data = await getWeather(city.trim());
      setWeatherData(data);
    } catch {
      alert('City not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#e6f2ff', padding: 20 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
        style={{
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 15,
          fontSize: 18,
          marginTop: 50,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 3 },
        }}
      />

      <TouchableOpacity
        onPress={fetchWeather}
        style={{
          backgroundColor: '#4DA6FF',
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 15,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Get Weather</Text>
      </TouchableOpacity>

      {loading && <Loader />}
      {weatherData && <WeatherCard data={weatherData} />}
    </KeyboardAvoidingView>
  );
}
