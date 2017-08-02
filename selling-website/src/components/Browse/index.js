import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import './style.css';
import Search from '../Layout/search';

const Browse = ({ }) => (
  <div className="browse-container">
    <div className="left-container">
      <div className="cat-wrapper">
        <p>CATEGORIES:</p>
        <a href="#">This is Category 1</a>
        <a href="#">This is Category 2</a>
        <a href="#">This is Category 3</a>
        <a href="#">This is Category 4</a>
        <a href="#">This is Category 5</a>
        <a href="#">This is Category 6</a>
      </div>
    </div>
    <div className="center-container">
      <Search />
    </div>
    <div className="right-container">

    </div>
    <div className="main-content-wrapper">
    </div>
  </div>
)

Browse.propTypes = {
}

export default Browse