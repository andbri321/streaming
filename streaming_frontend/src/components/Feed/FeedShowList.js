import React from 'react';
import FeedCard from './FeedCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeedShowList = () => {
  return (
    <Container>
      {[...Array(4)].map((elementInArray, index) => ( 
        <Row className='mt-3'>
          <Col className='mr-2'>
            <FeedCard />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FeedShowList;
