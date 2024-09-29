import {styled} from 'nativewind';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const Login = () => {
  const handleLogin = () => {
    console.log('login');
  };
  return (
    <StyledView className="flex-1 justify-center items-center bg-gray-900">
      <StyledText className="text-3xl font-bold mb-8 text-white">
        Login
      </StyledText>

      <StyledView className="w-4/5">
        <StyledTextInput
          className="border border-gray-600 rounded-lg p-4 mb-4 bg-gray-800 text-white"
          placeholder="Email"
          placeholderTextColor="#A0AEC0"
          keyboardType="email-address"
        />

        <StyledTextInput
          className="border border-gray-600 rounded-lg p-4 mb-4 bg-gray-800 text-white"
          placeholder="Password"
          placeholderTextColor="#A0AEC0"
          secureTextEntry={true}
        />

        <StyledButton
          title="Submit"
          onPress={() => handleLogin()}
          color="#2563EB"
        />
      </StyledView>
    </StyledView>
  );
};

export default Login;
