import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text,
  Modal,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import {getMovieDetail} from '../services/services';
import PlayButton from '../components/PlayButton';
import Video from '../components/Video';

const {height} = Dimensions.get('screen');
const placeholderImage = require('../assets/images/placeholder.png');

const Detail = ({route, navigation}) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const {movieId} = route.params;

  // Modal Show Handler
  const showModal = () => {
    setIsModal(true);
  };

  // Modal Hide Handler
  const hideModal = () => {
    setIsModal(false);
  };

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
        <View>
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
              <View style={styles.playButton}>
                <PlayButton handlePress={showModal} />
              </View>
              <Text style={styles.title}>{movieDetail?.title}</Text>
              <View style={styles.genreContainer}>
                {movieDetail?.genres?.map(genre => (
                  <Text key={genre.id} style={styles.genre}>
                    {genre.name}
                  </Text>
                ))}
              </View>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={movieDetail?.vote_average / 2}
                fullStarColor="gold"
                starSize={30}
              />

              <Text style={styles.overview}>{movieDetail?.overview}</Text>
              <Text style={styles.release}>
                Release date:{' '}
                {dateFormat(movieDetail?.release_date, 'dd mmmm, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType="slide"
            visible={isModal}>
            <View style={styles.videoModal}>
              <Video onClose={hideModal} navigation={navigation} />
            </View>
          </Modal>
        </View>
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
    marginVertical: 15,
  },
  genreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  genre: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
    textAlign: 'justify',
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
