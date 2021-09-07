import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const Navbar = ({navigation, main}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.mainNav}>
          <Image
            source={require('../assets/images/movies.png')}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-back" size={40} color="white" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
});

Navbar.defaultProps = {
  main: false,
};

Navbar.propTypes = {
  main: PropTypes.bool,
};

export default Navbar;
