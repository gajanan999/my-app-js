import './App.css';

import React  from 'react';
import Moment from 'react-moment';

import UITheme from './components/UITheme';
import { Grid } from 'gridjs-react';

function App() {

  const dateToFormat = '1976-04-19T12:59-0500';

  return (
    <div className="App">
      <header className="App-header">
        <UITheme></UITheme>
        <div style={{fontSize:24}} className="hello-world">
          Hello world
      </div>
      </header>

      <Grid
          data={[
            ['John', 'john@example.com'],
            ['Mike', 'mike@gmail.com']
          ]}
          columns={['Name', 'Email']}
          search={true}
          pagination={{
            enabled: true,
            limit: 1,
          }}
      />

      {
        
        <Moment>{dateToFormat}</Moment>
      }
    </div>
  );
}

export default App;
