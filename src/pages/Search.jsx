import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchTerm } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Search results for: {searchTerm}</h2>
      <p>Display search results here.</p>
    </div>
  );
};

export default Search;
