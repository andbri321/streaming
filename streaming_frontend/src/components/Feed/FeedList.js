import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
// import { useDispatch, useSelector } from 'react-redux';
// import FeedShowList from './FeedShowList';
// import FeedPagination from './FeedPagination';
import FeedGrid from './FeedGrid';
import FeedShowList from './FeedShowList';
// import { fetchUsers } from '../store/users';
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
