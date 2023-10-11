import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

export const Header = () => {

    return(
        <>
            <div className='App-header'>
                <NavLink to = '/' className= {({isActive}) => isActive?'activeNavlink' : "navlink"} > Home</NavLink>
                <NavLink to = '/newEnveloppe' className= {({isActive}) => isActive?'activeNavlink' : "navlink"}>Create a New Enveloppe</NavLink>
            </div>
            <Outlet/>
                
        </>
    )

}