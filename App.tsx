import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import Expenses from './src/screens/Expenses';
import FormCard from './src/screens/Form';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  const user = useSelector((state: any) => state.user);
  console.log(user);

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="expenses"
            component={Expenses}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="new"
            component={FormCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
