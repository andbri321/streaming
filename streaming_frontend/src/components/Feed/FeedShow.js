import React from 'react';
import ReactPlayer from 'react-player';

const FeedShow = ( ) => {

  return (
      <div>
        <ReactPlayer
          url="https://videos.pexels.com/video-files/854132/854132-hd_1280_720_50fps.mp4"
          width="1280"
          height="720"
          controls
        />
      </div>
  );
};

export default FeedShow;

