import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({navigation}) => {
  const [text, setText] = useState('');

  // Input submit handler
  const onSubmit = () => {
    console.log(text);
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Search Movie"
            />
          </View>
          <TouchableOpacity onPress={onSubmit}>
            <Icon name="search-outline" size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 15,
    padding: 8,
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },
});

export default Search;
