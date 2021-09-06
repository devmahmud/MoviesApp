import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
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
    <>
      {loaded && (
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
          <View style={styles.container}>
            <Text style={styles.title}>{movieDetail?.title}</Text>
            <View style={styles.genreContainer}>
              {movieDetail?.genres?.map(genre => (
                <Text key={genre.id} style={styles.genre}>
                  {genre.name}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 2.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  genre: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default Detail;
