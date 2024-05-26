import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><NavLink className='navitem' to="/list">Lista</NavLink></li>
                    <li><NavLink className='navitem' to="/calender">Calendario</NavLink></li>
                    <li><NavLink className='navitem' to="/presupuesto">Presupuesto</NavLink></li>
                    <li><NavLink className='navitem' to="/prestamo">Prestamos</NavLink></li>
                </ul>
            </nav>
            <br />
            <Outlet/>
        </div>
    )
}
