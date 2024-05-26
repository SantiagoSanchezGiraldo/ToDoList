import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useFormul } from '../hooks/useForms';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = useFormul({
		updateDescription: todo.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

		handleUpdateTodo(id, description);
		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`inputUpdate ${todo.done ? 'text-decoration-dashed' : ''}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué hay por hacer?'
				readOnly={disabled}
				ref={focusInputRef}/>
			<button className='btnEdit' type='submit'><FaEdit /></button>
		</form>
	);
};