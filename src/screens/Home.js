import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import {
  getUpcomingMovies,
  getPopularMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from '../services/services';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
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
    getPopularTv()
      .then(movies => {
        setPopularTv(movies);
      })
      .catch(err => {
        setError(err.message);
      });
    getFamilyMovies()
      .then(movies => {
        setFamilyMovies(movies);
      })
      .catch(err => {
        setError(err.message);
      });
    getDocumentaryMovies()
      .then(movies => {
        setDocumentaryMovies(movies);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <ScrollView>
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
      <View style={styles.carousel}>
        <List title="Popular TV Shows" content={popularTv} />
      </View>
      <View style={styles.carousel}>
        <List title="Family Movies" content={familyMovies} />
      </View>
      <View style={styles.carousel}>
        <List title="Documentary Movies" content={documentaryMovies} />
      </View>
    </ScrollView>
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
