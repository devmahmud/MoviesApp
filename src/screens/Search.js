import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import Error from '../components/Error';
import {searchMovieTv} from '../services/services';

const Search = ({navigation}) => {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Input submit handler
  const onSubmit = () => {
    Promise.all([searchMovieTv(text, 'movie'), searchMovieTv(text, 'tv')])
      .then(([movies, tv]) => setSearchResults([...movies, ...tv]))
      .catch(() => setError(true))
      .finally(() => {
        setLoaded(true);
      });
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
        <View style={styles.searchItems}>
          {/* Searched items result */}
          {searchResults?.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResults}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
            />
          )}

          {/* When Searched but no results */}
          {loaded && searchResults?.length === 0 && (
            <View style={styles.noResult}>
              <Text>No results matching your criteria.</Text>
              <Text>Try different keywords.</Text>
            </View>
          )}

          {/* When Nothing is searched */}
          {!searchResults && (
            <View>
              <Text>Type something to start searching.</Text>
            </View>
          )}

          {/* Error */}
          {error && <Error />}
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
  searchItems: {
    padding: 5,
  },
  noResult: {
    paddingTop: 20,
  },
});

export default Search;
