import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayButton = () => {
  return (
    <Pressable style={styles.button}>
      <Icon name="caret-forward-outline" size={30} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: 'blue',
  },
});

export default PlayButton;
