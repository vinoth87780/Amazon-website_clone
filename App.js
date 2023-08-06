import React from 'react';

import BottomNavigation from './src/navigation/BottomNavigation';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from './src/screens/CartScreen';
import MoreAbout from './src/screens/MoreAbout';
import Product from './src/screens/Product';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Carts"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="More"
          component={MoreAbout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
