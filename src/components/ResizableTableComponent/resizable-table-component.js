import React from 'react';
import { Grid} from 'gridjs-react';
import { html, h } from 'gridjs';
import {SelectAllComponent} from './select-all-component';
import './resizable-table-component.css'

function ResizableTableComponent() {

  function myFunction(e){
    console.log(e)
  }

  const myCheckbox = h('input', {
    type: 'checkbox',
    onClick: myFunction,
    className: 'select-input'
  });


  return (
    <Grid
    columns={[
        {
          id: 'edit',
          name: 'Action',
          formatter: (cell, row) => {
            return html(`<button type="button" class="select-button">select</button>`);
          },
          attributes: (cell, row, column) => {
            return {
                className: "gridjs-td select-column",
                'onClick': ()=>{
                    console.log('select button clicked')
                }
            }
          },
          width: '80px',
          sort: false,
        },
        {
            id: 'name',
            name: myCheckbox,
            sort: false
            
        },
        'Age',
        'Country',
      ]}
      sort={true}
      search={true}
      data={[
        ['John Smith', 34, 'USA'],
        ['Alice Brown', 27, 'Canada'],
        ['Bob Johnson', 41, 'Australia'],
        ['Mary Lee', 22, 'China'],
        ['David Lee', 57, 'USA'],
        ['Sara Johnson', 39, 'Canada'],
        ['Mike Davis', 25, 'Australia'],
        ['Grace Wang', 32, 'China']
      ]}
      style={{
        table: {
          width: '100%'
        }
      }}
      resizable={true}
      width={'auto'}
      height={400}
      pagination={{
        enabled: true,
        limit: 5,
        summary: true
      }}
    />
  );
}

export default ResizableTableComponent;