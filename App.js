import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import QuizScreen from './screens/QuizScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import CustomNavigationBar from './screens/AppBar';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Category" component={LandingScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen 
          name="LeaderBoard"
          component={LeaderBoardScreen}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
