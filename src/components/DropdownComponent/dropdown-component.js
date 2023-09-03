


import React, { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
 
// Be sure to include styles at some point, probably during your bootstrapping
//import 'react-select/dist/css/react-select.css';



export default function DropdownComponent(){
    const [options, setOptions] = useState([]);

    useEffect(() => {

        let  option = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
        setOptions(option)
    }, [options])

    function logChange(val) {
        console.log("Selected: " + val);
      }

    return (
        <div>
            <h2>DropdownComponent</h2>
            <Select
                name="form-field-name"
                value="one"
                options={options}
                onChange={logChange}
                />
        </div>
      );

}

