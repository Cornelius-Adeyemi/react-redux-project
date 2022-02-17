import './App.css';
import React from 'react';
import You, { UserPage } from './redux/index';

import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';




function App(props) {

   
    return (<div className='main'>

  <Router>
    <Routes>
    <Route exact path="/" element={<You/>}/>
    <Route path="/user/:userId" element={<UserPage/>}/>
    <Route  path="*"  element ="Match not Found(404)" />

    </Routes>
  </Router>
  </div>
    
  );

}

export default App;
