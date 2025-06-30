import React from 'react';
import { useParams } from 'react-router-dom';

const GenreSongs = () => {
  const { genreId } = useParams();
  return <div>Genre Songs for {genreId}</div>;
};

export default GenreSongs;
