import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import LoadingSpinner from '../components/Loading';
import {useFinanceDataQuery} from '../lib/api/expenseSlice';
import {userLogout} from '../lib/data/auth/userSlice';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useFinanceDataQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const handlePress = () => {
    navigation.navigate('expenses');
  };

  return (
    <View className="">
      <TouchableOpacity onPress={() => handlePress()}>
        <View className="bg-green-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">Balance: {data?.balance}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-green-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">
            Earn: {data?.thisMonthEarn}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-red-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">
            Expenses: {data?.thisMonthExpense}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-red-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">
            Total Expenses: {data?.totalExpense}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View className="bg-green-400 p-5 rounded-sm mx-2 mt-1 items-center">
          <Text className="font-bold font-serif">
            Total Earn: {data?.totalEarn}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('new');
        }}
        className="bg-blue-400 mx-2 mt-1 p-5 rounded">
        <Text className="text-white text-center">Create New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(userLogout())}
        className="bg-blue-400 mx-2 mt-1 p-5 rounded">
        <Text className="text-white text-center">Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
