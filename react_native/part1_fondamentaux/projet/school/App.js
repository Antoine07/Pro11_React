import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import StudentsScreen from './screens/StudentsScreen';
import AbscenceScreen from './screens/AbscenceScreen';

import { Provider } from 'react-redux'; // contextualiser le store

import createStore from './store/createStore';
const store = createStore();

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Abscences" component={AbscenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
    <Provider store={store}>
      <Nav />
    </Provider>
);

export default App;