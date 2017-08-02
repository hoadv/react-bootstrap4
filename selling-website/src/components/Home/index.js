import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import './style.css';
import Search from '../Layout/search';

const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll:1,
      arrows: true
    };

const Home = ({ }) => (
  <div className="home-container">
    <div className="slogan-wrapper">
      <p>Borrow stuff you need.</p>
      <p>Lend stuff you don't.</p>
    </div>
    <Search />
    <div className="main-content-wrapper">
      <h3>Recently Viewed Items:</h3>
      <Slider {...settings}>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/playstation-vr-03430626.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
             <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/canon-eos-7d-camera--11067947.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
             <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/pioneer-djm850-mixer-11796811.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/samsung-360-camera-73848770.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>  
      </Slider>
    </div>

    <div className="main-content-wrapper">
      <h3>FEATURED LISTINGS:</h3>
      <Slider {...settings}>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/playstation-vr-03430626.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
             <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/canon-eos-7d-camera--11067947.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/pioneer-djm850-mixer-11796811.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/samsung-360-camera-73848770.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/epson-ebx31-projector-79645197.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>
        <div className="carousel-item-container">
          <div className="img-wrapper">
            <img src="https://fat-lama-all-images-resized.s3-eu-west-1.amazonaws.com/images/medium/dji-phantom-4-16189153.jpg" width="100%" height="150px"/>
          </div>
          <div className="item-details-wrapper">
            <a target="_blank" href="#" className="production">
              Playstation VR
            </a>
             <a target="_blank" className="author" href="#">
              By HoaDang
            </a>
          </div>
        </div>  
      </Slider>
    </div>
  </div>
)

Home.propTypes = {
}

export default Home