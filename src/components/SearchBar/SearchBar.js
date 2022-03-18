/* eslint-disable jsx-a11y/anchor-is-valid */
import './SearchBar.css';
import { useState } from 'react';

function SearchBar(props) {

  const [term,setTerm] = useState()

  const search = () => {
    props.onSearch(term)
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar;
