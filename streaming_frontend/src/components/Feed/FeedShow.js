import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPexelById } from '../../store/pexel_by_id';

const FeedShow = () => {
  const {id} =  useParams();
  const dispatch = useDispatch();
  const { data, error, loading} = useSelector(state => state.pexel_by_id);
  const user = data;

  useEffect(() => {
    dispatch(fetchPexelById(id));
  }, [dispatch]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        {user &&
          <ReactPlayer
            url={user.files[0].link}
            width="1920"
            height="1080"
            controls
            />
        }
      </div>
  );
};

export default FeedShow;

