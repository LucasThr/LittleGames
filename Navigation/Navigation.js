// Navigation/Navigation.js

// Navigation/Navigation.js
import React from 'react'
import { TouchableOpacity } from 'react-native'
import 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeGames from '../Components/HomeGames';
import Settings from '../Components/Settings';
import Taquin from '../Components/Games/GameTaquin/Taquin';
import Morpion from '../Components/Games/GameMorpion/Morpion';
import FlappyBird from '../Components/Games/FlappyBird/Main';
import TouchButton from '../Components/Games/TouchButton/TouchButton';
import SlotMachine from '../Components/Games/Casino/SlotMachine';
import BlackJack from '../Components/Games/Casino/BlackJack/BlackJack';
import PubJetons from '../Components/Pub/Jetons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackHome({ navigation }) {
  return(
    <Stack.Navigator initialRouteName="Accueil" >
      <Stack.Screen name="Accueil" component={HomeGames}
              options={{
                headerTintColor: '#c4c4c4',
                headerStyle: {
                  backgroundColor: '#403f3f',
                },
                headerLeft: () => (
                  <TouchableOpacity
                  style={{marginLeft:13}}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    title="Info"> 
                    <Ionicons name="menu-outline" size={45} color='#c4c4c4'/>
                  </TouchableOpacity>
                ),
              }} />
      <Stack.Screen name="Taquin" component={Taquin} 
       options={{
        headerTintColor: '#c4c4c4',
        headerStyle: {
          backgroundColor: '#403f3f',
        }}} />
      <Stack.Screen name="Morpion" component={Morpion} 
       options={{
        headerTintColor: '#c4c4c4',
        headerStyle: {
          backgroundColor: '#403f3f',
        }}} />
      <Stack.Screen name="FlappyBird" component={FlappyBird} 
       options={{
        headerTintColor: '#c4c4c4',
        headerStyle: {
          backgroundColor: '#403f3f',
        }}} />
      <Stack.Screen name="Fast Ball" component={TouchButton}
       options={{
        headerTintColor: '#c4c4c4',
        headerStyle: {
          backgroundColor: '#403f3f',
        }}} />
      <Stack.Screen name="Machine à Sous" component={SlotMachine}
       options={{
        headerTintColor: '#c4c4c4',
        headerStyle: {
          backgroundColor: '#403f3f',
        }}} />
        <Stack.Screen name="BlackJack" component={BlackJack}
       options={{
        headerTintColor: '#c4c4c4',
        headerStyle: {
          backgroundColor: '#403f3f',
        }}} />
    </Stack.Navigator> 
  );
}

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

function StackPubJetons({ navigation }) {
  return(
    <Stack.Navigator initialRouteName="Jetons" >
      <Stack.Screen name="Jetons" component={PubJetons}
        options={{
       
          headerLeft: () => (
            <TouchableOpacity
            style={{marginLeft:13}}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Info"> 
              <Ionicons name="menu-outline" size={45} color='black'/>
            </TouchableOpacity>
          ),
        }}  />
    </Stack.Navigator> 
  );
}

function StackSettings({ navigation }) {
  return(
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Settings" component={Settings} 
        options={{
       
          headerLeft: () => (
            <TouchableOpacity
            style={{marginLeft:13}}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Info"> 
              <Ionicons name="menu-outline" size={45} color='black'/>
            </TouchableOpacity>
          ),
        }} />
      {/* <Stack.Screen name="FilmDetail" component={FilmDetail} /> */}
    </Stack.Navigator> 
  );
}


class Navigation extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator 
          drawerStyle={{
            backgroundColor: '#403f3f',
          }}
        drawerType='back'
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Jetons" component={StackPubJetons} />
        {/* <Drawer.Screen  name="Settings" component={StackSettings} /> */}
      </Drawer.Navigator>

        {/* <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
          }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
          },
          tabStyle: { borderTopWidth: 0 }, style: { borderTopWidth: 0} ,
          activeTintColor: 'white',
          inactiveTintColor: '#bebebe',
          activeBackgroundColor: '#3d3d3d', // Couleur d'arrière-plan de l'onglet sélectionné
          inactiveBackgroundColor: '#5d5d5d', // Couleur d'arrière-plan des onglets non sélectionnés
        }}>
          <Tab.Screen name="Home" component={StackHome} />
          <Tab.Screen name="Chat" component={StackChat} />
          <Tab.Screen name="Settings" component={StackSettings} />
        </Tab.Navigator> */}
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



export default Navigation
