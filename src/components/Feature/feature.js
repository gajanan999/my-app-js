import React , { useState } from 'react';
import { Grid } from 'gridjs-react';
import { html } from "gridjs";
import Modal from 'react-bootstrap/Modal';



export default function Feature() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [columnNames, setColumnNames] = useState([ 
        {
            name: 'Name', render: (data) => <>{data.name}</>
        },
        {
            name: 'Visible',
            formatter: (cell) => activeCheckBox(cell)
        }
    ]);


    function activeCheckBox(cell){

        if(cell)
            return html('<input type="checkbox" checked/>')
        else
            return html('<input type="checkbox"/>')
    }

    const [filterTableData, setFilterTableData] = useState([]);

    const [columns, setColumns] = useState([
        { name: 'Name', render: (data) => <>{data.name}</>, visible: 'true' },
        { name: 'Email', render: (data) => <>{data.email}</> , visible: 'true' },
        { name: 'Mobile', render: (data) => <>{data.mobile}</> , visible: 'true' },
        { name: 'Address', render: (data) => <>{data.address}</> , visible: 'true' },
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
            if(element.visible === true){
                col.push(element);
            }
        });
        setColumns(col);

    }

    function handleCheck(event){
        console.log(event.target.id)
    }

    function refresh(){
        //setColumnsVisibility()
        let filTableData = []
        columns.forEach((element)=>{
            filTableData.push(element);
        })
        //setColumnNames(filTableData)
        setFilterTableData(filTableData);
        //setColumnNames([])

        setShow(true);
    }





  return (

        <div className="container-fluid">
              <div className="row mb-10">
              <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Grid
                        data={filterTableData}
                        columns={columnNames}
                        search={true}
                        pagination={{
                            limit: 5,
                        }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button variant="primary" onClick={handleClose}>
                        Save Changes
                    </button>
                    </Modal.Footer>
                </Modal>
              </div>
              <button onClick={refresh}> filter table</button>
              <div className="row">
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
        </div>  

   );
}