import React from 'react';
import { useParams } from 'react-router-dom';

const ArtistDetails = () => {
  const { id } = useParams();
  return <div>Artist Details for ID: {id}</div>;
};

export default ArtistDetails;
