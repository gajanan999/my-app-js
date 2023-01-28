
import React , { useState } from 'react';
import { Grid } from 'gridjs-react';
import { html } from "gridjs";
import Modal from 'react-bootstrap/Modal';


export default function FeatureOne() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    
    const [allColumns, setAllColumns] = useState([ 
        { name: 'Name', render: (data) => <>{data.name}</>, visible: 'true' },
        { name: 'Email', render: (data) => <>{data.email}</> , visible: 'true' },
        { name: 'Mobile', render: (data) => <>{data.mobile}</> , visible: 'true' },
        { name: 'Address', render: (data) => <>{data.address}</> , visible: 'false' }
    ])

    const [filterTableData, setFilterTableData] = useState([])
    

    const [filterTableColumns, setFilterTableColumns] = useState([ 
        {
            name: 'Name', render: (data) => <>{data.name}</>
        },
        {
            name: 'Visible',
            formatter: (cell, row) => activeCheckBox(cell, row),
            attributes: (cell, row)=>{
               return {
                        'onClick': ()=> {
                            handleCheckBoxClick(row.cells[0].data)
                    }
                }
                
              }
        
        }]);

    // you can change here the defaults column
    const [mainTablecolumns, setMainTablecolumns] = useState([...allColumns]);


    function handleCheckBoxClick(columnName){
        console.log('data', columnName)

        let element = allColumns.find((x)=>{
            return x.name === columnName
        })

        if(element){
            let index = allColumns.indexOf(element)
            element.visible = !element.visible
            allColumns[index]= element
            // let item = mainTablecolumns.find((x)=>{
            //     return x.name === columnName
            // })
    
            // if(null != item){
            //     let index = mainTablecolumns.indexOf(item)
            //     item.visible = !item.visible
            //     mainTablecolumns[index]= item
            // }

        }

      
        /*
        let item = mainTablecolumns.find((x)=>{
            return x.name === columnName
        })

        if(null != item){
            let index = mainTablecolumns.indexOf(item)
            item.visible = !item.visible
            mainTablecolumns[index]= item
        }else{
            let element = allColumns.find((x)=>{
                return x.name === columnName
            })
            if(element){
                let index = allColumns.indexOf(item)
                element.visible = !element.visible
                allColumns[index]= element
                mainTablecolumns.push(element)
    
            }
        }*/
        
    }

    const handleSave = () => {

        let col = []
       //setMainTablecolumns(...col)
      // mainTablecolumns = mainTablecolumns.slice(1)
       


        allColumns.forEach((element)=>{
           if(element.visible){
            col.push(element)
           }
        })


       setMainTablecolumns(col);
       console.log(mainTablecolumns)
     
     
        setShow(false);
    }
    function refresh(){
        
        //take all columns
        setFilData();

        setShow(true);
    }

    function setFilData(){

        let data=[]

        allColumns.forEach((element)=>{
            data.push(element);
        })


        data.forEach((element)=>{
            let item = mainTablecolumns.find((x)=>{
                return x.name === element.name
            })
            if(null != item){
                element.visible = true
            }else{
                element.visible = false
            }

        })

        setFilterTableData(data);


    }

    




    function activeCheckBox(cell, row){


        if(cell)
            return html(`<input type="checkbox" checked/>`)
        else
            return html(`<input type="checkbox" }/>`)
        
      
    }

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
                        columns={filterTableColumns}
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
                    <button variant="primary" onClick={handleSave}>
                        Save Changes
                    </button>
                    </Modal.Footer>
                </Modal>
              </div>
              <button onClick={refresh}> filter table</button>
              <div className="row">
                <Grid
                                data={getData}
                                columns={mainTablecolumns}
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