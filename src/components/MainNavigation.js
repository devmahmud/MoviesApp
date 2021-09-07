import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from './Navbar';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
      initialRouteName="Search">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={true} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          header: ({navigation}) => <Navbar navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: ({navigation}) => <Navbar navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
