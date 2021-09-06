import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="chevron-back" size={40} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navbar;
