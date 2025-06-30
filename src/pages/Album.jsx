import React from 'react';
import { useParams } from 'react-router-dom';

const Album = () => {
  const { id } = useParams();
  return <div>Album Details for ID: {id}</div>;
};

export default Album;
