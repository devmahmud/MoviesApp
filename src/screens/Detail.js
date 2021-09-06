import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {getMovieDetail} from '../services/services';

const Detail = ({route}) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loaded, setLoaded] = useState(false);

  const {movieId} = route.params;

  useEffect(() => {
    getMovieDetail(movieId)
      .then(movieData => setMovieDetail(movieData))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <View>
      <Text>{movieDetail?.title}</Text>
    </View>
  );
};

export default Detail;
