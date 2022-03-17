import './Track.css';

function Track(props) {

  const renderAction = () => {
    if (props.isRemoval) {
      return <button className='Track-action'>-</button>
    }
    else {
      return <button className='Track-action'>+</button>
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>track name</h3>
        <p>track artist |  track album will go here </p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track;
