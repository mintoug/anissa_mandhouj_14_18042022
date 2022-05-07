import * as React from 'react';



export default function BasicDatePicker(type, id ,label,setInput,value) {


  return (
   
    <div >
        <label>{label}</label>
         <input 
         type={"date" }
         id={"date"}
         onChange={(e) => setInput(e.target.value)}
          value={value}
         ></input>
    </div>
  );
}
