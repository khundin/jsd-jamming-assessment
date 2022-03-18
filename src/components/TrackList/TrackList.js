import Track from '../Track/Track';
import './TrackList.css';


function TrackList(props) {
    return (
        <div className="TrackList">
            {props.tracks.map(track =>{
                return <Track onAdd={props.onAdd} 
                              track={track} 
                              key={track.id}
                              onRemove={props.onRemove}
                              isRemoval={props.isRemoval} />
            })}
        </div>
    )
}

export default TrackList;