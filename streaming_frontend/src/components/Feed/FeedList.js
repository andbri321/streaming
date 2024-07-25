import Container from 'react-bootstrap/Container';
import FeedGrid from './FeedGrid';
import FeedShowList from './FeedShowList';
import FeedHeader from './FeedHeader';
import FeedPagination from './FeedPagination';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPexels } from '../../store/pexels';
import {useLocation} from 'react-router-dom';

const FeedList = ({handleShow}) => {
  const location = useLocation();
  const search = location.search.replace('?','');

  const [feed_grid, setFeedGrid] = useState(true);
  const [pexels, setPexels] = useState();
  const [meta, setMeta] = useState();

  const dispatch = useDispatch();
  const { data, error, loading} = useSelector(state => state.pexels);

  useEffect(() => {
    setPexels(data?.movies);
    setMeta(data?.meta);
  }, [data]);

  useEffect(() => {
    const per_page = 16;
    dispatch(fetchPexels('token',1,per_page,search));
  }, [dispatch]);


  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  function handlePage(page) {
    const per_page = feed_grid ? 16 : 5;
    dispatch(fetchPexels('token',page,per_page,location.search));
  }

  function handleClick(status){
    const per_page = status ? 16 : 5;
    setFeedGrid(status);
    dispatch(fetchPexels('token',1,per_page));
  }

  return (
    <>
      <Container>
        <FeedHeader feed_grid={feed_grid} handleClick={handleClick} />
        {feed_grid ? (
            <FeedGrid
              pexels={pexels}
              onClick={() => handlePage(1)}
              handleShow={handleShow} />
          )
          :
          (
            <FeedShowList
              pexels={pexels}
              onClick={() => handlePage(1)}
              handleShow={handleShow} />
          )
        }
        <FeedPagination
          meta={meta}
          handlePage={handlePage}
          current_page={1}
          first_page={2}
          total={15}
        />
      </Container>
    </>
  )
};

export default FeedList;
