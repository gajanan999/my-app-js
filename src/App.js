import './App.css';

import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testing  from  './components/Testing/testing';
import Feature  from  './components/Feature/feature';
import FeatureOne from './components/FeatureOne/feature-one';
import "gridjs/dist/theme/mermaid.css";
//import Moment from 'react-moment';
import CspFeature from './components/CspFeature/csp-feature';
import CspFeatureWithHtmlEditor from './components/CspFeatureWithHtmlEditor/csp-feature-html-editor';
import DataTableComponent from './components/DataTableComponent/data-table-component';
import { GridComponent1 } from './common-components/GridComponent/Grid-component1';

import UITheme from './components/UITheme';
import DropdownComponent from './components/DropdownComponent/dropdown-component';
import TableComp from './components/TableComp/TableComp';
import ResizableTableComponent from './components/ResizableTableComponent/resizable-table-component'
import { StateManagementComponent } from './components/StateManagement/state-management-component';
import  UserRegistrationForm  from './components/StateManagement/formik/user-registration-formik-feature1';
import {DemoComponent} from './components/DemoComponent/demo-component'

import { TodoStore } from './components/StateManagement/todo-store';

//import { Grid } from 'gridjs-react';

function App() {

  //const dateToFormat = '1976-04-19T12:59-0500';

  
  const columns = ['Name', 'Email', 'Gender'];
  const data = [
      ['John Doe', 'johndoe@example.com', '(123) 456-7890'],
      ['Jane Smith', 'janesmith@example.com', '(555) 555-5555'],
      ['Bob Johnson', 'bjohnson@example.com', '(555) 123-4567'],
    ];

  return (
      <Router>
        <Routes >
          <Route exact path="/" element={<UITheme/>}/>
          <Route exact path="/testing" element={<Testing/>}/>
          <Route exact path="/demo" element={<DemoComponent data={data} columns={columns}/>}/>
          <Route exact path="/features" element={<Feature/>}/>
          <Route exact path="/featureOne" element={<FeatureOne/>}/>
          <Route exact path="/cspFeature" element={<CspFeature/>}/>
          <Route exact path="/cspFeatureWithHtmlEditor" element={<CspFeatureWithHtmlEditor/>}/>
          <Route exact path="/data-table-component" element={<DataTableComponent/>}/>
          <Route exact path="/data-table-component1" element={<GridComponent1/>}/>
          <Route exact path="/dowpdown-component" element={<DropdownComponent/>}/>
          <Route exact path="/table-component" element={<TableComp/>}/>
          <Route exact path="/resizable-table-component" element={<ResizableTableComponent/>}/>
          <Route exact path="/state-management-component" element={<StateManagementComponent todoStore={TodoStore}/>}/>
          <Route exact path="/user-registration-formik" element={<UserRegistrationForm />}/>
        </Routes >
      </Router>
  );
}

export default App;
