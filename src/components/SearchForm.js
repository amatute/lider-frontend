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
    <div className='container search-form'>
      <form onSubmit={onSummit}>
        <div className="row">
          <div className="col m10">
              <div className="input-field">
                <label className="active" id="search-text">Buscar productos</label>
                <input
                  type="text"
                  name="search"
                  onChange={ (e) => setSearchTerm(e.target.value)}
                />
              </div>
          </div>
          <div className="col m2 search-button">
            <button className="indigo darken-3 btn">Buscar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
