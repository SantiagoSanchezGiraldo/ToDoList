import React from 'react'

export const Home = () => {
    return (
        <div className='home container'>
            <h1>Bienvenido a ToDo</h1>
            <br /><br />
            <p>
                <h3>Esta pagina te ayudara a mantener el orden de tus obejtivos y metas,
                por medio de:</h3> <br />
                - Una Lista de tareas: Puedes agregar tus deberes, objetivos y metas a tener
                en cuenta, podras editar la tarea que agregaste al igual que eliminarla y chulearlo
                de tu lista de tareas pendientes. <br /><br />
                - Un Calendario: Puedes agendar tus tareas por medio de fechas, tambien podras editar 
                la tarea que agregaste al igual que eliminarla y chulearlo de tu lista de tareas 
                pendientes. <br /><br />
                - Un Gestor de Presupuesto: Puedes gestionar el presupuesto de tus tareas u objetivos,
                podras poner un presupuesto inicial y a medida que vas agregando los gastos que relacionas 
                con este presupuesto se va realizando tus cuentas.
            </p>
        </div>
    )
}
