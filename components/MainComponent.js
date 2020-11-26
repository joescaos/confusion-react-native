import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';


const Stack = createStackNavigator();

function MenuNavigatorScreen() {
  return(
      <Stack.Navigator
          initialRouteName='Menu'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}
      >
          <Stack.Screen
              name="Menu"
              component={Menu}
          />
          <Stack.Screen
              name="Dishdetail"
              component={Dishdetail}
              options={{ headerTitle: "Dish Detail"}}
          />            
      </Stack.Navigator>
  );
}

function HomeNavigatorScreen(){
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />          
        </Stack.Navigator>
    );
};

function ContactNavigatorScreen(){
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <Stack.Screen
                name="Contact"
                component={Contact}
            />          
        </Stack.Navigator>
    );
};

const MainNavigator = createDrawerNavigator();


class Main extends Component {

  render() {
 
    return (
        <NavigationContainer>
          <MainNavigator.Navigator>
              <MainNavigator.Screen name="Home" component={HomeNavigatorScreen}/>
              <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen} />
              <MainNavigator.Screen name="Contact" component={ContactNavigatorScreen} />
          </MainNavigator.Navigator>
        </NavigationContainer>
    );
  }
}
  
export default Main;

