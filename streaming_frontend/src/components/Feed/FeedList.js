import React from 'react';
import Container from 'react-bootstrap/Container';
import FeedGrid from './FeedGrid';
import FeedShowList from './FeedShowList';
import FeedHeader from './FeedHeader';
import FeedPagination from './FeedPagination';

const FeedList = () => {

  return (
    <>
      <Container>
        <FeedHeader />
        <FeedGrid />
        {/* <FeedShowList /> */}
        <FeedPagination /> 
      </Container>
    </>
  )
};

export default FeedList;
