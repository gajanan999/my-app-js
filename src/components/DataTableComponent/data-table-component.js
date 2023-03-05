import React, { useRef, useState, useEffect } from 'react';
import {GridComponent} from '../../common-components/GridComponent/grid-component';

export default function DataTableComponent() {

    const data = [
        ['John Doe', 'johndoe@example.com', 'Male', 'New York'],
        ['Jane Doe', 'janedoe@example.com', 'Female', 'California'],
        ['Bob Smith', 'bobsmith@example.com', 'Male', 'Texas'],
      ];
      
    const columns = ['Name', 'Email', 'Gender', 'Location'];


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
    };


    return (
        <div>
          <h1>User Table</h1>
          <GridComponent data={data} columns={columns} options={options} />
        </div>
      );
      

}