import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><NavLink className='navitem' to="/list">Lista</NavLink></li>
                    <li><NavLink className='navitem' to="/calender">Calendario</NavLink></li>
                    <li><NavLink className='navitem' to="/otro">Otro</NavLink></li>
                    <li><NavLink className='navitem' to="/otra">Otra</NavLink></li>
                </ul>
            </nav>
            <br />
            <Outlet/>
        </div>
    )
}
