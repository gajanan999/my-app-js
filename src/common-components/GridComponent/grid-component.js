import React from 'react';
import { Grid } from 'gridjs';

export const GridComponent = (props) => {
    const { data, columns, options } = props;
    
    const gridRef = React.useRef(null);
    
    React.useEffect(() => {
      if (gridRef.current) {
        new Grid({
          columns,
          data,
          sort: true,
          search: true,
          pagination: true,
          autoWidth: true,
          ...options, // additional options
        }).render(gridRef.current);
      }
    }, [data, columns, options]);
  
    return <div ref={gridRef} />;
};