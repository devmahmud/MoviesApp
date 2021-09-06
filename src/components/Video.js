import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({onClose, navigation}) => {
  return (
    <VideoPlayer
      onBack={onClose}
      navigator={navigation}
      onEnd={onClose}
      fullscreenOrientation="all"
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    />
  );
};

export default Video;
