import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('expenses');
  };

  return (
    <View className="">
      <TouchableOpacity onPress={() => handlePress()}>
        <View className="bg-green-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">Balance: 40000</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-green-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">Earn: 40000</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-red-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">Expenses: 40000</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-red-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">Total Expenses: 40000</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-green-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">Total Earn: 40000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('new');
        }}
        className="bg-blue-400 mx-2 mt-1 p-5 rounded">
        <Text className="text-white text-center">Create New</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
