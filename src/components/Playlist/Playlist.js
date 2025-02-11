import TrackList from '../TrackList/TrackList';
import './Playlist.css';


function Playlist(props) {

  const handleNameChange = (event) => {
      props.onNameChange(event.target.value)
  }
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}
             onChange={handleNameChange} />
      <TrackList onAdd={props.onAdd} 
                 tracks = {props.playlistTracks}
                 onRemove={props.onRemove}
                 isRemoval={true} />
      <button className="Playlist-save" 
              onClick={props.onSave} >SAVE TO SPOTIFY</button>
    </div>
  )
}



export default Playlist;
