import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {getUpcomingMovies} from '../services/services';

const dimensions = Dimensions.get('screen');

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

  return (
    <SafeAreaView style={styles.sliderContainer}>
      <SliderBox
        images={moviesImages}
        sliderBoxHeight={dimensions.height / 1.5}
        dotStyle={styles.sliderStyle}
        autoplay
        circleLoop
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
});

export default Home;
