import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import {createStackNavigator} from 'react-navigation-stack'
import { StyleSheet, Text, View } from 'react-native';

const stackNavigator= createStackNavigator({
  Home:HomeScreen
},
{
  initialRouteName:'Home',
  headerMode:"none"
})


export default createAppContainer(stackNavigator)