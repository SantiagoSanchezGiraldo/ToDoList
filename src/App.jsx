import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Lista } from './components/Lista';
import { Deafualt } from "./components/Deafualt";
import MyCalendar from './components/Calander'; 
import Presupuesto from './components/presupuesto';
import { Home } from './components/Home';
import { Prestamos } from './components/Prestamos';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='list' element={<Lista />} />
            <Route path='calender' element={<MyCalendar />} />
			      <Route path='presupuesto' element={<Presupuesto />} />
            <Route path='prestamo' element={<Prestamos />} />
            <Route path='*' element={<Deafualt />} /> 
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
