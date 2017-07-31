import React, { PropTypes } from 'react'
import './style.css';

const Header = ({ }) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        <img src="https://fatlama.com/img/logo_june.png" width="50px"/>
      </a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item bg-primary active">
            <a className="nav-link" href="#">BROWSE</a>
          </li>
          <li className="nav-item bg-primary">
            <a className="nav-link" href="#">LIST ITEM</a>
          </li>
          <li className="nav-item bg-primary">
            <a className="nav-link" href="#">REQUEST ITEM</a>
          </li>
          <li className="nav-item bg-primary">
            <a className="nav-link" href="#">ABOUT</a>
          </li>
           <li className="nav-item bg-primary">
            <a className="nav-link" href="#">SIGN UP</a>
          </li>
           <li className="nav-item bg-primary">
            <a className="nav-link" href="#">LOG IN</a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

Header.propTypes = {
}

export default Header