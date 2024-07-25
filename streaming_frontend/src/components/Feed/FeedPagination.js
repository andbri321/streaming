import React from "react";
import { CDBPagination, CDBPageLink, CDBPageItem } from "cdbreact";
import Row from 'react-bootstrap/Row';

const FeedPagination = ({ meta, handlePage}) => {
    const prev_page = meta?.prev_page;
    const next_page = meta?.next_page;
    const current_page = meta?.current_page;
    const total_pages = meta?.total_pages;

    return (
        <Row className='mt-3'>
            <CDBPagination style={{backgroundColor: '#262626'}} 
              className="justify-content-end border-0"
              color='light'
            >
              { total_pages !== 0 &&
                <>
                  { prev_page &&
                    <CDBPageItem
                      onClick={() => handlePage(prev_page)}
                    >
                      {prev_page}
                    </CDBPageItem>
                  }
                  <CDBPageItem 
                    className='bg-success'
                    active
                    onClick={() => handlePage(current_page)}
                  >
                    {current_page}
                  </CDBPageItem>

                  { next_page &&
                    <CDBPageItem
                    onClick={() => handlePage(next_page)}
                    >
                    {next_page}
                    </CDBPageItem>
                  }
                </>
              }
              <CDBPageLink >
                Total {total_pages}
              </CDBPageLink>
          </CDBPagination>
        </Row>
    )
}

export default FeedPagination;