import React from 'react';
import Image from 'react-bootstrap/Image';

const FeedCard = ({width}) => {
  return (
    <Image
      src='https://images.pexels.com/videos/854132/pictures/preview-0.jpg'
      width={width}
      height="180px"
      />
  );
};

export default FeedCard;
