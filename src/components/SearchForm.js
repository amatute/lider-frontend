import React, { useState } from 'react'

const SearchForm = ({handleSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSummit = async (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      handleSubmit({input: searchTerm });
    }
  }
  return (
    <div>
      <form onSubmit={onSummit}>
        <div className="input-field">
          <label className="active" id="search-text">Buscar:</label>
          <input
            type="text"
            name="search"
            onChange={ (e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="row">
          <button className="indigo darken-3 btn">Go</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
