import React from 'react';
import { Image, Text, View } from 'react-native';
import { WeatherData } from '../services/weather';

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <View
      style={{
        marginTop: 30,
        backgroundColor: '#4DA6FF',
        padding: 25,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: '700', color: '#fff' }}>
        {data.name}
      </Text>
      <Image source={{ uri: iconUrl }} style={{ width: 150, height: 150 }} />
      <Text style={{ fontSize: 36, fontWeight: '600', color: '#fff', marginTop: 5 }}>
        {Math.round(data.main.temp)}°C
      </Text>
      <Text style={{ fontSize: 20, color: '#e0f0ff', marginTop: 5 }}>
        {data.weather[0].description}
      </Text>
    </View>
  );
}
