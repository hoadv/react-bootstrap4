import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import './style.css';

const Footer = ({ }) => {
  return (
    <div className="footer-container">
      <div className="footer-menu-wrapper">
        <a href="#">Browse Items</a>
        <a href="#">List Item</a>
        <a href="#">Request Item</a>
        <a href="#">Login</a>
        <a href="#">Sign up</a>
      </div>
    </div>
  );
}

Footer.propTypes = {
}

export default Footer