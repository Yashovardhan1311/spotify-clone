// src/components/SongCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, index, data }) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className="bg-[#1f1f1f] p-4 rounded-lg hover:bg-[#2c2c2c] transition-all">
      <div className="relative group">
        <img src={song.images?.coverart} alt="cover" className="w-full h-48 rounded" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100">
          <button onClick={handlePlay} className="text-white text-xl bg-green-500 px-4 py-2 rounded">Play</button>
        </div>
      </div>
      <div className="mt-2">
        <Link to={`/songs/${song.key}`} className="block text-lg font-bold hover:underline">
          {song.title}
        </Link>
        <Link to={`/artists/${song.artists?.[0]?.adamid}`} className="block text-sm text-gray-400 hover:underline">
          {song.subtitle}
        </Link>
      </div>
    </div>
  );
};

export default SongCard;
