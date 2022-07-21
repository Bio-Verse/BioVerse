import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Inicial from './Telas/Inicial';
import Pergunta from './Telas/Pergunta';
import Principal from './Telas/Principal';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Inicial}/>
         <Stack.Screen name="Pergunta" component={Pergunta}/>
         <Stack.Screen name="Principal" component={Principal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
