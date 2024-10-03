import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useCreateDetailsMutation} from '../lib/api/expenseSlice';

const FormScreen = ({navigation}: any) => {
  // Initialize useForm with default values
  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      details: '',
      amount: '',
      type: 'expense', // Set default transaction type
    },
  });

  const [selectedValue, setSelectedValue] = useState('expense');
  const [createDetails, isLoading] = useCreateDetailsMutation();

  useEffect(() => {
    setValue('type', selectedValue);
  }, [setValue, selectedValue]);

  const onSubmit = async (data: any) => {
    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().slice(0, 10);

    // Add the date to the submitted data
    const formData = {
      ...data,
      date: currentDate,
    };
    const res = await createDetails(formData);
    if (res?.data) {
      navigation.navigate('home');
    }
  };

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <View className="w-full px-10">
        <Controller
          control={control}
          name="details"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="bg-white text-black border border-gray-300 rounded-lg p-4 mt-2"
              placeholder="details"
              placeholderTextColor="gray"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          rules={{required: true}} // Example validation rule
        />
        <Controller
          control={control}
          name="amount"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="bg-white text-black border border-gray-300 rounded-lg p-4 mt-2"
              placeholder="Enter a number"
              placeholderTextColor="gray"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          rules={{required: true}} // Example validation rule
        />

        {/* Wrapper View to apply border radius */}
        <View className="bg-white rounded-lg border border-gray-300 mt-2">
          <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => {
              setSelectedValue(itemValue);
              setValue('type', itemValue); // Use setValue here
            }}
            style={{color: 'black'}} // Set text color
          >
            <Picker.Item label="Earn" value="earn" />
            <Picker.Item label="Expense" value="expense" />
          </Picker>
        </View>

        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-4 mt-4"
          onPress={handleSubmit(onSubmit)} // Call handleSubmit on button press
        >
          <Text className="text-white text-center font-semibold">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormScreen;
