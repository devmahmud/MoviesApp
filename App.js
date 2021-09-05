import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getPopularMovies} from './src/services/services';

const App = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => setMovie(movies[0]))
      .catch(err => {
        setError(err.message);
      });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Movie: {movie?.original_title}</Text>

      {error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};

export default App;
