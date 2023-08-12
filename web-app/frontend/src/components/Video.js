import React from 'react';

const Video = ({ src, autoPlay, controls }) => {
  return (
    <video
      src={src}
      autoPlay={autoPlay}
      controls={controls}
      style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
    />
  );
};

export default Video;
