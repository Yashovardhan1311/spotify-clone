import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black p-5">
      <h1 className="text-2xl font-bold mb-6">Spotify 2.0</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:text-green-400">Discover</Link>
        <Link to="/search/test" className="hover:text-green-400">Search</Link>
        <Link to="/genres/pop" className="hover:text-green-400">Genres</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
