import * as React from 'react';



export default function BasicDatePicker(props) {


  return (
   
    <div >
        <label>{props.label}</label>
         <input type="date"  onChange={e => {
                props.onChange(e.target.value);
              }}
              value={props.value}
         ></input>
    </div>
  );
}
