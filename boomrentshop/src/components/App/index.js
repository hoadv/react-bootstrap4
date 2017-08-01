import React from 'react'
import Header from '../Layout/header'
import Home from '../Home/'

import './style.css';

const App = (props) => (
  <div className="">
    <Header />
    <div className="container" id="mainContainer">
     {(() => {
        switch (props.location.pathname) {
            case '/browse-items':
                return 'Browse Items'
            default :
                return <Home />
        }
    })()}
    </div>
  </div>
)

export default App