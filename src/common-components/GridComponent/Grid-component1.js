import React, { useState, useLayoutEffect, useEffect   } from 'react';
import { Grid } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';

function handleDataChange() {
  console.log('Data changed');
}

export const GridComponent1 = () =>  {
  const data = [
    ['John Doe', 'johndoe@example.com', '(123) 456-7890'],
    ['Jane Smith', 'janesmith@example.com', '(555) 555-5555'],
    ['Bob Johnson', 'bjohnson@example.com', '(555) 123-4567'],
  ];
  const gridRef = React.useRef(null);

  const [searchResultCount, setSearchResultCount] = useState(null);
  const updateSearchResultCount = () => {
    if(gridRef.current){
      const instance = gridRef.current.getInstance();
       const count = instance.config?.tableRef?.current?.props?.data?._rows.length;
       console.log(`Current data count: ${count}`);
       setSearchResultCount(count)
    
    }

  };

  const handleClick = (row, column) => {
    console.log(`Clicked on row ${row} and column ${column}`);
  };



  useEffect(() => {
    const table = gridRef.current.grid;

    if(table){
      table.on('click', (cell, row, column) => {
        handleClick(row.index, column.index);
      });
    }

  

    return () => {
      table.off('click');
    };
  }, []);

  useEffect(()=>{
    if(gridRef.current.instance.config?.tableRef?.current?.props?.data?._rows.length){
      const instance = gridRef.current.getInstance();
       const count = instance.config?.tableRef?.current?.props?.data?._rows.length;
       console.log(`Current data count: ${count}`);
       setSearchResultCount(count)
    
    }

    const instance = gridRef.current.getInstance();
   // instance.config?.tableRef?.current.on('click', handleClick);
    return () => {
      instance.off('click', handleClick);
    };
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>User Table {searchResultCount !== null && `(${searchResultCount} results)`}</h2>
          <Grid
            ref={gridRef}
            columns={['Name', 'Email', 'Phone']}
            data={data}
            sort={true}
            search={{
              enabled: true,
              placeholder: 'Search...',
            }}
            onChanged={() => {
              // call handleSearch and update the searchResult state
              updateSearchResultCount()
            }}
            pagination={{
              enabled: true,
              limit: 5,
              summary: true,
            }}
            language={{
              // search:{
              //   placeholder: 'Search by Name, Email or Phone',
              // },
              pagination: {
                previous: '<',
                next: '>',
                showing: 'Showing',
                results: () => { 
                  return 'Records'
                },
                of: 'of',
              },
              summary: (info) => {
                //setSearchResultCount(info.total)
                return `Showing ${info.from} to ${info.to} of ${info.total} results`
              },
              total: (info) => {
                return info ? info.total:0;
              }
            }}
            className={{
              table: 'table table-striped table-bordered table-hover',
            }}
          />
        </div>
      </div>
    </div>
  );
}
