// Navigation/Navigation.js

// Navigation/Navigation.js
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeGames from '../Components/HomeGames';
import Settings from '../Components/Settings';
import Taquin from '../Components/Games/Taquin';
import Morpion from '../Components/Games/Morpion';


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackHome() {
  return(
    <Stack.Navigator initialRouteName="HomeGames">
      <Stack.Screen name="HomeGames" component={HomeGames} />
      <Stack.Screen name="Taquin" component={Taquin} />
      <Stack.Screen name="Morpion" component={Morpion} />

    </Stack.Navigator> 
  );
}

function StackSettings() {
  return(
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Settings" component={Settings} />
      {/* <Stack.Screen name="FilmDetail" component={FilmDetail} /> */}
    </Stack.Navigator> 
  );
}

class Navigation extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
          inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        }}>
          <Tab.Screen name="Home" component={StackHome} />
          <Tab.Screen name="Settings" component={StackSettings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}




      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen name="Home" component={Search} />
      //     <Stack.Screen name="FilmDetail" component={FilmDetail} />
      //   </Stack.Navigator>
      // </NavigationContainer>
//     )
//   }
}

// const styles = StyleSheet.create({
//   icon: {
//     width: 30,
//     height: 30
//   }
// })

export default Navigation
