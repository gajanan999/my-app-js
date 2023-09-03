import React, { useRef, useState, useEffect } from 'react';
import {GridComponent} from '../../common-components/GridComponent/grid-component';

export default function DataTableComponent() {

    const data = [
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
        
      ];

    const [h, setH] = useState([])
    const [hAnswer, setHAnswer] = useState('');
      
    const columns = ['Name', 'Email', 'Gender', 'Location'];
    const htmlFormatter = () => {

      return ['Name', 'Email', 'Gender', 'Location']
    }

    const options = {
        style: {
            table: {
              border: '1px solid black',
              textAlign: 'center',
              width: '100%',
            },
            th: {
              backgroundColor: 'gray',
              color: 'white',
              padding: '10px',
            },
            td: {
              padding: '10px',
            },
            tr: {
              borderBottom: '1px solid gray',
            },
        },
        language: {
          search: {
            placeholder: 'Search users...'
          },
          pagination: {
            previous: '<',
            next: '>',
            showing: 'Displaying',
            results: () => 'Users',
          }
        }
        // Adding a custom callback function to get the search result count
        // and update the state of the component
      
    };

    const clearH = () => {
      setH([])
    }
  
    const handleHChange = (e) => {
      setHAnswer(e.target.value)
      let h1 = h
      h.push(e.target.value)
    }


    return (
        <div>
          <textarea
            value={hAnswer}
            onChange={handleHChange}
          />

          <button onClick={clearH}>clear</button>
          <h4>{h}</h4>
          <GridComponent data={data} columns={htmlFormatter()} options={options} />
        </div>
    );
      
{}
}