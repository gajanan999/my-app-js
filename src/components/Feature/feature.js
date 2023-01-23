import React , { useState } from 'react';
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";


export default function Feature() {

    const [columns, setColumns] = useState([
        { name: 'Name', render: (data) => <>{data.name}</> },
        { name: 'Email', render: (data) => <>{data.email}</> },
        { name: 'Mobile', render: (data) => <>{data.mobile}</> },
        { name: 'Address', render: (data) => <>{data.address}</> },
      ]);

    function getData(){
        return new Promise(resolve => {
            setTimeout(() =>
              resolve([
                {
                    'name':'John', 
                    'email':'john@example.com', 
                    'mobile':'(353) 01 222 3333',
                    'address':'Munich'
                },
                {
                    'name':'Mark', 
                    'email':'mark@gmail.com', 
                    'mobile': '(01) 22 888 4444',
                    'address':'Munich'
                },
                {
                    'name':'Mark', 
                    'email':'mark@gmail.com', 
                    'mobile': '(01) 22 888 4444',
                    'address':'Berlin'
                },
                {
                    'name':'Mark', 
                    'email':'mark@gmail.com', 
                    'mobile': '(01) 22 888 4444',
                    'address':'Munich'
                },
                {
                    'name':'Mark', 
                    'email':'mark@gmail.com', 
                    'mobile': '(01) 22 888 4444',
                    'address':'Berlin'
                }
              ]), 1000);
          });
    }


    function setCustomizeColumes(cols){
        
        let col = []
        cols.forEach(element => {
            if(element.visible == true){
                col.push(element);
            }
        });
        setColumns(col);

    }

    function  setColumnsVisibility(){
        let cols = [
            {
                name: 'Name', render: (data) => <>{data.name}</>, visible: true
            },
            { 
                name: 'Email', render: (data) => <>{data.email}</>, visible: true
            },
            { 
                name: 'Mobile', render: (data) => <>{data.mobile}</>, visible: true
            },
            { 
                name: 'Address', render: (data) => <>{data.address}</>, visible: false
            }
        ]
        setCustomizeColumes(cols);
    }
    function refresh(){
        setColumnsVisibility()
    }

  return (

        <div class="container-fluid">
            <button onClick={refresh}>Refresh</button>
            <Grid
                            data={getData}
                            columns={columns}
                            search={true}
                            pagination={{
                                limit: 5,
                            }}
                            style={{
                                table: {
                                  border: '3px solid #ccc',
                                  width: '-webkit-fill-available'
                                },
                                th: {
                                  'background-color': 'rgba(0, 0, 0, 0.1)',
                                  color: '#000',
                                  'border-bottom': '3px solid #ccc',
                                  'text-align': 'center'
                                },
                                td: {
                                  'text-align': 'center'
                                }
                            }}
            />
        </div>  

   );
}