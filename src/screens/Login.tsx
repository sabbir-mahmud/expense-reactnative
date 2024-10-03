import {styled} from 'nativewind';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useLoginMutation} from '../lib/api/authSlice';
import {userLogin} from '../lib/data/auth/userSlice';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const Login = () => {
  const [createLogin, {isLoading}] = useLoginMutation();
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      console.log(loginData);

      const data = await createLogin(loginData);
      if (data && data.data && data.data.token) {
        const token = data.data.token;
        dispatch(userLogin(token)); // Ensure userLogin is properly imported
      } else {
        console.log('Login failed: No token received');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleInputChange = (field: any, value: any) => {
    setLoginData(prevState => ({
      ...prevState,
      [field]: value,
    }));
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
          onChangeText={text => handleInputChange('email', text)}
          value={loginData.email}
        />

        <StyledTextInput
          className="border border-gray-600 rounded-lg p-4 mb-4 bg-gray-800 text-white"
          placeholder="Password"
          placeholderTextColor="#A0AEC0"
          secureTextEntry={true}
          onChangeText={text => handleInputChange('password', text)}
          value={loginData.password}
        />

        <StyledButton title="Submit" onPress={handleLogin} color="#2563EB" />
      </StyledView>
    </StyledView>
  );
};

export default Login;
