import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import MoreAbout from '../screens/MoreAbout';
import Iconic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#5ee4d4',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 4 : size + 3;
            color = '#000';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'book-sharp' : 'book-outline';
            size = focused ? size + 3 : size + 2;
            color = '#000';
          } else if (route.name === 'Carts') {
            iconName = focused ? 'bag-handle' : 'bag-handle-outline';
            color = '#000';
          } else if (route.name === 'More') {
            iconName = focused ? 'bus-sharp' : 'bus-outline';
            color = '#000';
          }
          return <Iconic name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarShowLabel: false, headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarShowLabel: false, headerShown: false}}
      />
      <Tab.Screen
        name="Carts"
        component={CartScreen}
        options={{tabBarShowLabel: false, headerShown: false}}
      />
      <Tab.Screen
        name="More"
        component={MoreAbout}
        options={{tabBarShowLabel: false, headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
