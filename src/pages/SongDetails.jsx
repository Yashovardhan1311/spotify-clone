import React from 'react';
import { useParams } from 'react-router-dom';

const SongDetails = () => {
  const { songid } = useParams();
  return <div>Song Details for ID: {songid}</div>;
};

export default SongDetails;
