import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css'; // Estilos CSS personalizados

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      if (editTaskId) {
        const updatedTasks = tasks.map((taskItem) =>
          taskItem.id === editTaskId ? { ...taskItem, task } : taskItem
        );
        setTasks(updatedTasks);
        setEditTaskId(null);
        setNotification('Tarea editada con éxito.');
      } else {
        setTasks([...tasks, { id: tasks.length + 1, date: date.toDateString(), task, completed: false }]);
        setNotification('Tarea añadida con éxito.');
      }
      setTask('');
      setTimeout(() => setNotification(''), 3000);
    } else {
      setNotification('Por favor ingresa una tarea válida.');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const handleEditTask = (taskId, taskText) => {
    setTask(taskText);
    setEditTaskId(taskId);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setEditTaskId(null);
    setNotification('Tarea eliminada con éxito.');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((taskItem) =>
      taskItem.id === taskId ? { ...taskItem, completed: !taskItem.completed } : taskItem
    );
    setTasks(updatedTasks);
    setNotification('Tarea marcada como completada.');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="my-calendar">
      <h1 className="title">Calendario</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Añadir tarea"
      />
      <button className="add-button" onClick={handleAddTask}>{editTaskId ? 'Guardar Cambios' : 'Añadir Tarea'}</button>
      {notification && <p className="notification">{notification}</p>}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <div>
              <strong>{task.date}:</strong> {task.task}
            </div>
            <div>
              <button className="edit-button" onClick={() => handleEditTask(task.id, task.task)}>Editar</button>
              <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
              <button className="complete-button" onClick={() => handleCompleteTask(task.id)}>
                {task.completed ? 'Descompletar' : 'Completar'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCalendar;
