import React from 'react';
import {ScrollView, View} from 'react-native';
import Expense from '../components/expense/Expense';
import LoadingSpinner from '../components/Loading';
import {useGetDetailsQuery} from '../lib/api/expenseSlice';

const Expenses = () => {
  const {data, isLoading, error} = useGetDetailsQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ScrollView className="bg-black">
      <View>
        {data?.map((expense: any): any => (
          <Expense key={expense._id} expense={expense} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Expenses;
