import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Expense from '../components/expense/Expense';

const Expenses = () => {
  const expenseDetails = [
    {
      details: 'home expense',
      amount: 98.12,
      type: 'expense',
      date: '2024-04-19',
    },
    {
      details: 'home expense',
      amount: 98.12,
      type: 'earn',
      date: '2024-04-19',
    },
  ];

  return (
    <View>
      {expenseDetails.map(expense => (
        <Expense expense={expense} />
      ))}
    </View>
  );
};

export default Expenses;
