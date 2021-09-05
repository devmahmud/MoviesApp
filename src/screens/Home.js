import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getPopularMovies} from '../services/services';

const Home = () => {
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
      <Text>Language: {movie?.original_language}</Text>
      <Text>Release Date: {movie?.release_date}</Text>

      {error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};

export default Home;
