import React, { useState } from 'react'
import { calcularTotal } from '../hooks/helpers';
import { ResultadoP } from './ResultadoP';

export const Prestamos = () => {
    const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState("");
    const [total, setTotal] = useState(0);

    const [error, setError] = useState(false);

    const calcularPrestamo = e =>{
        e.preventDefault();
        if (cantidad === 0 || plazo === ""){
            setError(true);
            return;
        }
        setError(false);

        const total = calcularTotal(cantidad,plazo);
        setTotal(total);
    }

    let componente;
    if (total === 0) {
        componente = <p>Ingrese una cantidad y un plazo</p>;
    }else{
        componente = <ResultadoP total = {total} cantidad = {cantidad} plazo = {plazo}/>;
    }
    return (
        <div className="container prestamos">
            <h1>Cotizador de Prestamos</h1>
            <form onSubmit={calcularPrestamo}>
                <div className="column">
                    <div className='cantidad'>
                        <label htmlFor="">Cantidad Prestamo</label>
                        <input type="number" name="" placeholder='$0,0' 
                        onChange={(e)=>setCantidad(e.target.value)}/>
                    </div>
                    <div className='plazo'>
                        <label htmlFor="">Plazo de pago</label>
                        <select onChange={(e)=>setPlazo(e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>
            {(error) ? <p className='error'>Porfavor llenar o seleccionar las opciones en los campos</p> : ""}
            <br />
            <div className="mensaje">
                {componente}
            </div>
        </div>
    )
}
