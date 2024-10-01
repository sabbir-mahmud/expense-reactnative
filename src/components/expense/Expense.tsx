import {format} from 'date-fns';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const Expense = ({expense}: any) => {
  const formattedDate = format(new Date(expense.date), 'MMMM dd, yyyy');
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        className={` p-5 rounded-sm mx-2 mt-1 mb-1 ${
          expense.type === 'earn' ? 'bg-green-400' : 'bg-red-400'
        }`}>
        {/* Card Row: Details */}
        <View className="flex-row justify-between mb-2">
          <Text className="font-bold font-serif">Date:</Text>
          <Text className="font-serif">{formattedDate}</Text>
        </View>

        <View className="flex-row justify-between mb-2">
          <Text className="font-bold font-serif">Details:</Text>
          <Text className="font-serif">{expense.details}</Text>
        </View>

        {/* Card Row: Amount */}
        <View className="flex-row justify-between mb-2">
          <Text className="font-bold font-serif">Amount:</Text>
          <Text className="font-serif">{expense.amount}</Text>
        </View>

        {/* Card Row: Type */}
        <View className="flex-row justify-between">
          <Text className="font-bold font-serif">Type:</Text>
          <Text className="font-serif">{expense.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Expense;
