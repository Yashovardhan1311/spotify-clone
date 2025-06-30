// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar";
import TopPlay from "./components/TopPlay";
import MusicPlayer from "./components/MusicPlayer";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Album from "./pages/Album";
import Playlist from "./pages/Playlist";
import Genre from "./pages/GenreSongs";
import ArtistDetails from "./pages/ArtistDetails";
import SongDetails from "./pages/SongDetails";
import './index.css';

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <Router>
      <div className="relative flex">
        <Sidebar />

        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-gray-900">
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/search/:searchTerm" element={<Search />} />
                <Route path="/albums/:id" element={<Album />} />
                <Route path="/playlists/:id" element={<Playlist />} />
                <Route path="/genres/:genreId" element={<Genre />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
              </Routes>
            </div>

            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup backdrop-blur-lg bg-gradient-to-t from-black/80 to-black/30 z-50">
            <MusicPlayer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
