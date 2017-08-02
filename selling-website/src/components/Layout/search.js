import React, { PropTypes } from 'react'

import './style.css';

const Search = ({ }) => {
  return (
    <div className="search-wrapper">
      <label htmlFor="search" className="form-control-label">What do you need to rent?</label>
      <form>
        <div className="form-group search-form-wrapper">
            <input id="search" name="" type="text" className="form-control search-input" placeholder="I need a..." />
            <input type="text" name="" className="form-control search-location" placeholder="Street or location" />
            <div className="search-btn">
                <button type="submit" className="btn btn-primary">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
}

export default Search