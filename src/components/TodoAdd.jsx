import React from 'react';
import { useFormul } from '../hooks/useForms';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useFormul({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};
	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='inputAdd'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué hay por hacer?'/>

			<button className='btnAdd' type='submit'>Agregar</button>
		</form>
	);
};