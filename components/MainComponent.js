import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';


const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
  return(
      <MenuNavigator.Navigator
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
          <MenuNavigator.Screen
              name="Menu"
              component={Menu}
          />
          <MenuNavigator.Screen
              name="Dishdetail"
              component={Dishdetail}
              options={{ headerTitle: "Dish Detail"}}
          />            
      </MenuNavigator.Navigator>
  );
}

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen(){
    return(
        <HomeNavigator.Navigator
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
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />          
        </HomeNavigator.Navigator>
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
          </MainNavigator.Navigator>
        </NavigationContainer>
    );
  }
}
  
export default Main;

