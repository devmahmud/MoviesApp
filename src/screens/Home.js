import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import {getUpcomingMovies, getPopularMovies} from '../services/services';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
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
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          sliderBoxHeight={dimensions.height / 1.5}
          dotStyle={styles.sliderStyle}
          autoplay
          circleLoop
        />
      </SafeAreaView>
      <View style={styles.carousel}>
        <List title="Popular Movies" content={popularMovies} />
      </View>
    </>
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
  carousel: {
    flex: 1,
  },
});

export default Home;
