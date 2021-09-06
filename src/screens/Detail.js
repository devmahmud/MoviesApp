import React, {useState, useEffect} from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import {getMovieDetail} from '../services/services';

const {height} = Dimensions.get('screen');
const placeholderImage = require('../assets/images/placeholder.png');

const Detail = ({route}) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loaded, setLoaded] = useState(false);

  const {movieId} = route.params;

  useEffect(() => {
    getMovieDetail(movieId)
      .then(movieData => setMovieDetail(movieData))
      .catch(err => console.log(err))
      .finally(() => {
        setLoaded(true);
      });
  }, [movieId]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={
          movieDetail?.poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`,
              }
            : placeholderImage
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height / 2.5,
  },
});

export default Detail;
