import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPexelById } from '../../store/pexel_by_id';
import useScreenSize from './../useScreenSize';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const FeedShow = () => {
  const {id} =  useParams();
  const dispatch = useDispatch();
  const { data, error, loading} = useSelector(state => state.pexel_by_id);
  const pexel = data;
  const screenSize = useScreenSize();

  useEffect(() => {
    dispatch(fetchPexelById(id));
  }, [dispatch,id]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }


  function getMovie(screenSize){
    const files = pexel.files
    if (screenSize.width < 576){
      return files.filter(o => o.quality =='sd' )[0]
    }else{
      return files.filter(o => o.quality =='hd' )[0]
    }
  }

  return (
    <Container className=' mt-1 md-0'>
      {
        pexel &&
        <>
          <Row>
              <ReactPlayer
                url={getMovie(screenSize).link}
                width={getMovie(screenSize).width}
                height={getMovie(screenSize).height}

                controls
                />
          </Row>

          <Row className='mt-3' style={{color:'#05A081'}}>
            <p className="h5">{pexel.user.name}: </p>
          </Row>
          <Row className='mt-0 md-0 text-white'  >
            <p className='mt-0 md-0'> ID: {pexel.id}</p>
          </Row>
          <Row className='text-white'>
            <p className='mt-0 md-0'> Resolução: {getMovie(screenSize).quality} </p>
          </Row>
          <Row className='text-white'>
            <p className='mt-0 md-0'> Duração: {pexel.duration}</p>
          </Row>
        </>
      }
    </Container>      
  );
};

export default FeedShow;

