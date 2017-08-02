import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import './style.css';
import SignupModal from '../Modal/signup';
import SigninModal from '../Modal/signin';

const Header = ({ }) => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand center-text" to="/">
          <img src="https://fatlama.com/img/logo_june.png" width="50px"/>
          <div>Company</div>
        </Link>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item bg-primary">
              <Link className="nav-link" to="/browse-items">BROWSE</Link>
            </li>
            <li className="nav-item bg-primary">
              <a className="nav-link" href="#">LIST ITEM</a>
            </li>
            <li className="nav-item bg-primary">
              <a className="nav-link" href="#">REQUEST ITEM</a>
            </li>
            <li className="nav-item dropdown bg-primary">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">How It Work</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Teams of Service</a></li>
                <li><a href="#">Private Policy</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </li>
            <li className="nav-item bg-primary">
              <a className="nav-link" href="javascript:void(0);" data-toggle="modal" data-target="#signupModal">SIGN UP</a>
            </li>
            <li className="nav-item bg-primary">
              <a className="nav-link" href="javascript:void(0);" data-toggle="modal" data-target="#signinModal">LOG IN</a>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <SignupModal></SignupModal>
      <SigninModal></SigninModal>
    </div>
  );
}

Header.propTypes = {
}

export default Header