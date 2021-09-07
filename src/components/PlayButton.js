import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/Colors';

const PlayButton = ({handlePress}) => {
  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Icon name="caret-forward-outline" size={30} color={Colors.white} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: Colors.primary,
  },
});

export default PlayButton;
