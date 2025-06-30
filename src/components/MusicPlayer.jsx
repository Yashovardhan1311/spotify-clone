import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playPause } from '../redux/features/playerSlice';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePlayPause = () => {
    dispatch(playPause(!isPlaying));
  };

  return (
    <div className="flex items-center justify-between w-full px-6">
      <div>
        <p className="text-lg font-semibold">{activeSong?.title || 'No Song Playing'}</p>
        <p className="text-sm text-gray-400">{activeSong?.subtitle}</p>
      </div>
      <button
        onClick={handlePlayPause}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
