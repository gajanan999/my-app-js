
import React, { useState, useLayoutEffect, useEffect   } from 'react';
import { Grid } from 'gridjs-react';

export const  DemoComponent = (props) => {
    const row = () => ['Gajanan', 'g@g.com'];
    //const [data, setData] = useState([{'Name': 'Gajanan', 'Email':'g@g.com'}]);
    const gridRef = React.useRef(null);

    // const columns = ['Name', 'Email', 'Gender'];
    // const data = [
    //     ['John Doe', 'johndoe@example.com', '(123) 456-7890'],
    //     ['Jane Smith', 'janesmith@example.com', '(555) 555-5555'],
    //     ['Bob Johnson', 'bjohnson@example.com', '(555) 123-4567'],
    //   ];
    const update = () => {
      //setData(data.slice(0).concat([row()]));
      props.data.push(['John Doe', 'johndoe@example.com', '(123) 456-7890'])
    }
    
    const [cat, setCat] = useState('')

    useLayoutEffect(() => {

        console.log(props.columns)

        console.log(props.data)
        const grid = new Grid({
            columns: props.columns,
            data: props.data,
            search: true,
            pagination: true,
            autoWidth: true,
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
        })
        grid.render(gridRef.current)
        console.log('grid: ', gridRef.current);
    }, [props.columns,props.data])
    
    return (
      <div>
        <button onClick={update.bind(this)} className={"py-2 mb-4 px-4 border rounded-md text-white bg-blue-600"}>
          Add record
        </button>
        <input type="text" onChange={e => setCat(e.target.value)}/>
        
        <div ref={gridRef}></div>

      </div>
    );
  }