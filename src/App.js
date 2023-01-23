import './App.css';

import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testing  from  './components/Testing/testing';
import Feature  from  './components/Feature/feature';
//import Moment from 'react-moment';

import UITheme from './components/UITheme';
//import { Grid } from 'gridjs-react';

function App() {

  //const dateToFormat = '1976-04-19T12:59-0500';

  return (
      <Router>
        <Routes >
          <Route exact path="/" element={<UITheme/>}/>
          <Route exact path="/testing" element={<Testing/>}/>
          <Route exact path="/features" element={<Feature/>}/>
        </Routes >
      </Router>
  );
}

export default App;
