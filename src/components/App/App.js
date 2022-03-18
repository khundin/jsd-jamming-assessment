import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import React, { useState, useEffect } from 'react';
import Spotify from '../../utils/Spotify';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const addTrack = (track) => {
    
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks,track])
    
  }

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter(removedTrack => removedTrack.id !== track.id)
      )
    }
  
  const updatePlaylistName = (name) => {
      setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs= playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }

  const search = (term) => {
    Spotify.search(term).then((searchResult) => {
      setSearchResults(searchResult);
    });
  }

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar onSearch={search} />
        <div class="App-playlist">
          <SearchResults searchResults = {searchResults} 
                        onAdd={addTrack} />
          <Playlist onAdd={addTrack} 
                    playlistName={playlistName} 
                    playlistTracks={playlistTracks}
                    onRemove={removeTrack}
                    onNameChange={updatePlaylistName}
                    onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
