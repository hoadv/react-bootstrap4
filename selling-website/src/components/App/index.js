import React from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import Home from '../Home/';
import Browse from '../Browse/';

import './style.css';

const App = (props) => (
  <div className="main-container">
    <Header />
    <div className="body-wrapper" id="mainContainer">
        {(() => {
            switch (props.location.pathname) {
                case '/browse-items':
                    return <Browse />
                default :
                    return <Home />
            }
        })()}
    </div>
    <Footer />
  </div>
)

export default App