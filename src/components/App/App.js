import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import { useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState(
    [
      {
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 1
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 2
      },
      {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: 3
      }
    ]
  );

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults searchResults = {searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
