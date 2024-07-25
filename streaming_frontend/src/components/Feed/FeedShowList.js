import React from 'react';
import FeedCard from './FeedCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeedShowList = ({pexels,handleShow}) => {
  return (
    <Container>
      {pexels && pexels.map(pexel => (
        <Row className='mt-3'>
          <Col className='mr-2'>
            <FeedCard key={pexel.id} pexel={pexel} handleShow={handleShow}/>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FeedShowList;
