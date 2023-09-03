import React, { useState, useLayoutEffect, useEffect   } from 'react';
import { Grid } from 'gridjs';
import $ from 'jquery';

export const GridComponent = (props) => {
    const { data, columns, options } = props;

    const [searchResultCount, setSearchResultCount] = useState(null);
    
    const gridRef = React.useRef(null);


    
    const updateSearchResultCount = () => {
      //const instance = gridRef.current.children[0]
      const instance = gridRef.current.querySelector('.gridjs-tbody');
      const instance1 = instance.childNodes.length;
        if (instance) {
          const count = instance1;
          setSearchResultCount(count);
        }else{
          setSearchResultCount(11000);
        }
    };
    
  
    useEffect(() => {

    }, []);

    $(()=>{

      $('.gridjs-search-input').on('input', ()=>{
        setTimeout(function(){
          
          

        }, 100)
      })


    })

    useLayoutEffect(() => {
      console.log('creating grid instance');

      const grid = new Grid({
          columns,
          data,
          sort: true,
          events: true,
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
        language: {
          search: {
            placeholder: 'Search users...'
          },
          pagination: {
            previous: '<',
            next: '>',
            showing: 'Displaying',
            results: () => {
              return 'Users'
            },
          },
          noRecordsFound: 'No records found'
         }
        })
      grid.render(gridRef.current)
      console.log('grid: ', gridRef.current);

      return () => {
      }
    }, [data, columns, options]);
  
    return (
      <div>
         <h2>User Table {searchResultCount !== null && `(${searchResultCount} results)`}</h2>
         <div ref={gridRef}/>
      </div>
  );
    
};