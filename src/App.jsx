import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useToDo } from './hooks/useToDo';

function App() {
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
		<>
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
		</>
	);
}

export default App;
