import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object().shape({
  date: Yup.date().required('Date and time are required').nullable(),
  details: Yup.string().required('Details are required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive'),
  type: Yup.string().required('Type is required'),
});

const FormCard = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = values => {
    Alert.alert('Form Submitted', JSON.stringify(values, null, 2));
  };

  return (
    <View style={{flex: 1, padding: 16}}>
      <Formik
        initialValues={{date: null, details: '', amount: '', type: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Date and Time Field */}
            <View style={{marginBottom: 16}}>
              <Text style={{fontWeight: 'bold', color: 'blue'}}>
                Date and Time
              </Text>
              <Button
                mode="outlined"
                onPress={() => setShowPicker(true)}
                style={{marginTop: 8}}>
                {values.date ? date.toLocaleString() : 'Select date and time'}
              </Button>
              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="datetime"
                  is24Hour={true}
                  display="default"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || date;
                    setShowPicker(false);
                    setDate(currentDate);
                    handleChange('date')(currentDate);
                  }}
                />
              )}
              {errors.date && touched.date && (
                <Text style={{color: 'red'}}>{errors.date}</Text>
              )}
            </View>

            {/* Details Field */}
            <View style={{marginBottom: 16}}>
              <TextInput
                label="Details"
                mode="outlined"
                onChangeText={handleChange('details')}
                onBlur={handleBlur('details')}
                value={values.details}
                error={touched.details && Boolean(errors.details)}
              />
              {errors.details && touched.details && (
                <Text style={{color: 'red'}}>{errors.details}</Text>
              )}
            </View>

            {/* Amount Field */}
            <View style={{marginBottom: 16}}>
              <TextInput
                label="Amount"
                mode="outlined"
                keyboardType="numeric"
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
                value={values.amount}
                error={touched.amount && Boolean(errors.amount)}
              />
              {errors.amount && touched.amount && (
                <Text style={{color: 'red'}}>{errors.amount}</Text>
              )}
            </View>

            {/* Type Field */}
            <View style={{marginBottom: 16}}>
              <Text style={{fontWeight: 'bold', color: 'blue'}}>Type</Text>
              <Picker
                selectedValue={values.type}
                onValueChange={handleChange('type')}
                onBlur={handleBlur('type')}
                mode="dropdown"
                style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 4,
                  padding: 8,
                }}>
                <Picker.Item label="Select type" value="" />
                <Picker.Item label="Earn" value="earn" />
                <Picker.Item label="Expense" value="expense" />
              </Picker>
              {errors.type && touched.type && (
                <Text style={{color: 'red'}}>{errors.type}</Text>
              )}
            </View>

            {/* Submit Button */}
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={{marginTop: 16}}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default FormCard;
