import React from 'react';
import FeedList from './FeedList';
import FeedShow from './FeedShow';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();

  function handleShow(user_id) {
    navigate('/movies/' + user_id)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<FeedList handleShow={handleShow} />} />
        <Route path='/:id' element={<FeedShow />} />
      </Routes>
    </>
  );
};

export default Feed;
