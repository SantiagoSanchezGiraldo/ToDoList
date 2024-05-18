import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Lista } from './components/Lista';
import { Deafualt } from "./components/Deafualt";
import MyCalendar from './components/Calander'; 
import Presupuesto from './components/presupuesto';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='calender' element={<MyCalendar />} />
            <Route path='list' element={<Lista />} />
            <Route path='*' element={<Deafualt />} />
			      <Route path='presupuesto' element={<Presupuesto />} /> 
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
