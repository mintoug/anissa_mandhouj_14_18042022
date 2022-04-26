import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.css'


export default function Header() {
  return (
    
    
   <>
       <h1>HRnet</h1>
    <nav >
        <NavLink to="/" > Create New</NavLink>
        <NavLink to="/employee-list">Employees list</NavLink>
    
    </nav>
    </> 
  )

}
