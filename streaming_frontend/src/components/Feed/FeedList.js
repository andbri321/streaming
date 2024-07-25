import Container from 'react-bootstrap/Container';
import FeedGrid from './FeedGrid';
import FeedShowList from './FeedShowList';
import FeedHeader from './FeedHeader';
import FeedPagination from './FeedPagination';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPexels } from '../../store/pexels';
import {useLocation} from 'react-router-dom';
import { fetchToken } from '../../store/token';

const FeedList = ({handleShow}) => {
  const location = useLocation();
  let search = location.search;

  const [feed_grid, setFeedGrid] = useState(true);
  const [pexels, setPexels] = useState();
  const [meta, setMeta] = useState();

  const dispatch = useDispatch();
  const { data, error, loading} = useSelector(state => state.pexels);
  useSelector(state => state.token);

  const [login,setLogin] = useState();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token){
      setLogin(true);
    }else{
      dispatch(
        fetchToken(
          {username: 'anderson', password: '123123'}
        )
      );
    }
  }, [dispatch,token]);


  useEffect(() => {
    setPexels(data?.movies);
    setMeta(data?.meta);
  }, [data,login]);

  useEffect(() => {
    if(login){
      const search_value = location.search.replace('?search=','')
      const per_page = feed_grid ? 16 : 5;
      dispatch(fetchPexels(1,per_page,search_value));
    }
      
  }, [dispatch,search,token,login]);


  if (error) {
    return <div className='text-white'>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  function handlePage(page) {
    const search_value = location.search.replace('?search=','')
    const per_page = feed_grid ? 16 : 5;
    dispatch(fetchPexels(page,per_page,search_value));
  }

  function handleClick(status){
    const per_page = status ? 16 : 5;
    const search_value = location.search.replace('?search=','')
    setFeedGrid(status);
    dispatch(fetchPexels(1,per_page,search_value));
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
