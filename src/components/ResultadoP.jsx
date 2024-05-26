import React from 'react'

export const ResultadoP = ({total, cantidad, plazo}) => {
    return (
        <div className="resultado">
            <h2>Cotizacion</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mesnsual es de: ${(total/plazo).toFixed(2)}</p>
            <p>Total a pagar: ${total}</p>
        </div>
    )
}
