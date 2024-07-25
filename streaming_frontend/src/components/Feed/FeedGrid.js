import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeedCard from './FeedCard';

const FeedGrid = () => {

  return (
    <div>
      {[...Array(4)].map((elementInArray, index) => ( 
        <Row className='mt-3'>
          <Col className='mr-2'>
            <FeedCard width={'100%'}/>
          </Col>
          <Col className='mr-2'>
            <FeedCard width={'100%'}/>
          </Col>
          <Col className='mr-2'>
            <FeedCard width={'100%'}/>
          </Col>
          <Col className='mr-2'>
            <FeedCard width={'100%'}/>
          </Col>
      </Row>
      ))}
    </div>
  );
};

export default FeedGrid;
