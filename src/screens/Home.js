import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {getUpcomingMovies} from '../services/services';

const Home = () => {
  const [moviesImages, setMoviesImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = movies.map(
          movie => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        );
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  console.log(moviesImages);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SliderBox images={moviesImages} />

      {error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};

export default Home;
