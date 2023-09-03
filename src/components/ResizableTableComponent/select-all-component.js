
import React from 'react';

export const SelectAllComponent = () =>  {

    function selectAll(){
        console.log('select all clicked');
    }

    return (

        <div>
            <input type='checkbox' onClick={selectAll}></input>
        </div>
    )

}