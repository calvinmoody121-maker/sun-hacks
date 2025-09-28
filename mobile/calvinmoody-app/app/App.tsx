import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../screens/LandingPage';
import SignInPage from '../screens/SignInPage';
import AddFriendsPage from '../screens/AddFriendsPage';

export type RootStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  AddFriends: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="AddFriends" component={AddFriendsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
