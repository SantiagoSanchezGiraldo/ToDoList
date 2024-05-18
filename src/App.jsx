import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Calander } from './components/Calander';
import { Lista } from './components/Lista';
import { Deafualt } from "./components/Deafualt";

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path='/' element={ <Navbar /> } >
						<Route path='calender' element={ <Calander /> } />
						<Route path='list' element={ <Lista /> } />
						<Route path='*' element={ <Deafualt /> } />
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
