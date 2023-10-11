import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

export const Header = () => {

    return(
        <>
            <div className='App-header'>
                <NavLink to = '/' className="navlink"> Home</NavLink>
                <NavLink to = '/newEnveloppe' className= "navlink">Create a New Enveloppe</NavLink>
            </div>
            <Outlet/>
                
        </>
    )

}