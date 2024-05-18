import React from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useToDo } from '../hooks/useToDo';

export const Lista = () => {
    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
    } = useToDo();

    return (
        <div className="container">
            <div className='cardToDo'>
                <h1>Lista de tareas</h1>
                <div className='counterToDos'>
                    <h3>N° Tareas: <span>{todosCount}</span></h3>
                    <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
                </div>

                <div className='addToDo'>
                    <h3>Agregar Tarea</h3>
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>

                <TodoList
                    todos={todos}
                    handleUpdateTodo={handleUpdateTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />
            </div>
        </div>

    )
}
