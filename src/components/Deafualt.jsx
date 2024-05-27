import paginaNo from '../assets/paginaNo.png';
import React from 'react'

export const Deafualt = () => {
    return (
        <div className='defualt container'>
            <h1>Esta pagina no se encuentra</h1>
            <br />
            <img src={paginaNo} alt="" />
        </div>
    )
}