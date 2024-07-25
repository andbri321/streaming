import React from 'react';
import FeedCard from './FeedCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeedShowList = ({pexels,handleShow}) => {
  return (
    <>
      {pexels && pexels.map(pexel => (
        <Row className='mt-3'>
          <Col className='mr-3 col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
          <FeedCard 
                width={'320px'}
                key={pexel.id}
                pexel={pexel}
                handleShow={handleShow}/>
          </Col>
          <Col className='mr-2 col-12 col-sm-4 col-md-6 col-lg-7 col-xl-8'>
            <Row className='mt-3' style={{color:'#05A081'}}>
              <p class="h5">{pexel.user_name}:</p>
            </Row>
            <Row className='mt-0 md-0 text-white'  >
              <p className='mt-0 md-0'> ID: {pexel.id}</p>
            </Row>
            <Row className='text-white'>
              <p className='mt-0 md-0'> Duração: {pexel.duration}</p>
            </Row>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default FeedShowList;
