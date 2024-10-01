// LoadingSpinner.js
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const LoadingSpinner = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text className="mt-4 text-lg text-gray-600">Loading</Text>
    </View>
  );
};

export default LoadingSpinner;
