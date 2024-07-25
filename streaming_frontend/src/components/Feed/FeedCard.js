import React from 'react';
import Image from 'react-bootstrap/Image';

const FeedCard = ({width, pexel, handleShow, key_value}) => {
  return (
    <Image
      key={key_value}
      src={pexel.video_pictures[0].picture}
      width={width}
      height="180px"
      onClick={() => handleShow(pexel.id)}

      />
  );
};

export default FeedCard;
