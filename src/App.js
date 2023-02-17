import './App.css';

import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testing  from  './components/Testing/testing';
import Feature  from  './components/Feature/feature';
import FeatureOne from './components/FeatureOne/feature-one';
import "gridjs/dist/theme/mermaid.css";
//import Moment from 'react-moment';
import CspFeature from './components/CspFeature/csp-feature';

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
          <Route exact path="/featureOne" element={<FeatureOne/>}/>
          <Route exact path="/cspFeature" element={<CspFeature/>}/>
        </Routes >
      </Router>
  );
}

export default App;
