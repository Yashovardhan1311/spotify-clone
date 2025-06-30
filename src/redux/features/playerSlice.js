import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    nextSong: (state, action) => {
      const nextIndex = action.payload;
      if (state.currentSongs[nextIndex]) {
        state.activeSong = state.currentSongs[nextIndex];
        state.currentIndex = nextIndex;
        state.isActive = true;
      }
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;
