import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeedCard from './FeedCard';

const FeedGrid = ({pexels,handleShow}) => {
  function groupByThree([a,b,c,d,...rest]){
    if (rest.length === 0) return [[a,b,c,d].filter(x => x!==undefined)]
    return [[a,b,c,d]].concat(groupByThree(rest))
  }

  const pexels_by_row = pexels ? groupByThree(pexels) : null;

  return (
    <div>
      {pexels_by_row && pexels_by_row.map((row, i) => ( 
        <Row 
          key={'row_'+i}
          className='mt-3'
        >   
            { row.map((pexel,j) => (
                <Col 
                  key={'col_'+j}
                  xs={3}
                  className='mr-2 mt-4 col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'
                >
                  <FeedCard
                    width={'100%'}
                    key={'feed_card_'+j}
                    pexel={pexel}
                    handleShow={handleShow}
                  />
                </Col>
              ))
            }
      </Row>
      ))}
    </div>
  );
};

export default FeedGrid;
