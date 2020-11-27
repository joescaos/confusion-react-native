import React, { Component } from 'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';


const Stack = createStackNavigator();

const StackNavigatorIcon = ({navigation}) => {
    return(
        <Icon 
            iconStyle={{padding: 15}}
            name="menu"
            size={24}
            color='white'
            onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}
        />
    )
};

const DrawerNavigatorIcon = ({name, size}) => {
    return(
        <Icon
            name={name}
            type='font-awesome'
            size={size ? size : 24}
        />
    )
};

const CustomDrawerContentComponent =(props) => (
    <DrawerContentScrollView {...props}>
        <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image 
                        source={require('./images/logo.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{flex: 1.75}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con fusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </DrawerContentScrollView>
)

function MenuNavigatorScreen({navigation}) {
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
              options={{
                headerLeft: () => <StackNavigatorIcon navigation={navigation} />
            }}
          />
          <Stack.Screen
              name="Dishdetail"
              component={Dishdetail}
              options={{ headerTitle: "Dish Detail"}}
          />            
      </Stack.Navigator>
  );
}

function HomeNavigatorScreen({navigation}){
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
                options={{
                    headerLeft: () => <StackNavigatorIcon navigation={navigation} />
                }}
            />          
        </Stack.Navigator>
    );
};

function ContactNavigatorScreen({navigation}){
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
                options={{
                    headerLeft: () => <StackNavigatorIcon navigation={navigation} />
                }}
            />          
        </Stack.Navigator>
    );
};

function AboutNavigatorScreen({navigation}){
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
                name="About"
                component={About}
                options={{
                    headerLeft: () => <StackNavigatorIcon navigation={navigation} />
                }}
            />          
        </Stack.Navigator>
    );
};

const MainDrawerNavigator = createDrawerNavigator();

function MainDrawerScreen(){
    return(
        <MainDrawerNavigator.Navigator
            initialRouteName={'Home'}
            drawerStyle={{
                backgroundColor: "#D1C4E9"
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}
        >
            <MainDrawerNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                    drawerIcon: () => <DrawerNavigatorIcon name='home' />
                }}
            />
            <MainDrawerNavigator.Screen
                name="About Us"
                component={AboutNavigatorScreen}
                options={{
                    drawerIcon: () => <DrawerNavigatorIcon name='info-circle' />
                }}
            />
            <MainDrawerNavigator.Screen
                name="Menu"
                component={MenuNavigatorScreen}
                options={{
                    drawerIcon: () => <DrawerNavigatorIcon name='list' />
                }}
            />
            <MainDrawerNavigator.Screen
                name="Contact Us"
                component={ContactNavigatorScreen}
                options={{
                    drawerIcon: () => <DrawerNavigatorIcon name='address-card' 
                        size={22}/>
                }}
            />

        </MainDrawerNavigator.Navigator>
    )
}


class Main extends Component {

  render() {
 
    return (
        <View style={{flex: 1 }}>
            <NavigationContainer>
                <MainDrawerScreen />
            </NavigationContainer>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });
  
export default Main;

