import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Loader() {
  return (
    <View style={{ marginTop: 40 }}>
      <ActivityIndicator size="large" color="#4DA6FF" />
    </View>
  );
}
