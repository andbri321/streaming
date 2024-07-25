import React from "react";
import { CDBPagination, CDBPageLink, CDBPageItem } from "cdbreact";
import Row from 'react-bootstrap/Row';

const FeedPagination = () => {
    return (
        <Row className='mt-3'>
        <CDBPagination 
          className="bg-secondary justify-content-end border-0"
          color='light'
          >
          <CDBPageItem 
          className='bg-success'
            >2</CDBPageItem>
          <CDBPageItem active>3</CDBPageItem>
          <CDBPageLink className='bg-secondary' disabled >5</CDBPageLink>
        </CDBPagination>
        </Row>
    )
}

export default FeedPagination;