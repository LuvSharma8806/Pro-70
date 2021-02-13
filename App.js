import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import inst from './screens/in';


export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
 }
}

const TabNavigator = createBottomTabNavigator(
  {
    
    'Write A Story': { screen: WriteStoryScreen },
    'Read A Story': { screen: ReadStoryScreen },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Read A Story') {
          return (
            <Image
              source={require('./Images/raed.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Write A Story') {
          return (
            <Image
              source={require('./Images/write.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } 
      },
    }),
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
