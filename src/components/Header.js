import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'



const Header = ()=>(
    <header>
    <h1>Expensify</h1>
    <NavLink 
        to="/" 
        className = {({ isActive }) =>
        isActive ? 'is-active' : undefined
        } >
        Dashboard
    </NavLink>
    <NavLink 
        to="/create" className={({isActive})=>
        isActive ? "is-active" : undefined}
        >
        Create
    </NavLink>
    <NavLink 
        to="/edit" className={({isActive})=>
        isActive ? "is-active" : undefined}
        >
        Edit
    </NavLink>
    <NavLink 
        to="/help" className={({isActive})=>
        isActive ? "is-active" : undefined}
        >
    Help</NavLink>


    </header>
)


export default  Header;