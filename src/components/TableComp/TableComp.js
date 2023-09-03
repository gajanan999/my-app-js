import React from "react";
import {Grid} from "gridjs-react";
import './TableComp.css'

const TableComp = () => {
  const data = [
    [1, "John", "Doe"],
    [2, "Jane", "Doe"],
    [3, "Joe", "Smith"],
  ];

  const options = {
    search: true,
    pagination: {
      limit: 5
    }
  };

  return <Grid data={data}  sort={true}
            search={true}
            options={options} />;
};

export default TableComp;
