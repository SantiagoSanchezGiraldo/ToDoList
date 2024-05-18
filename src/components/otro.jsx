import React, { useState, useEffect } from 'react';

const Otro = () => {
  const [presupuestoInicial, setPresupuestoInicial] = useState('');
  const [presupuesto, setPresupuesto] = useState(() => {
    const storedPresupuesto = localStorage.getItem('presupuesto');
    return storedPresupuesto ? parseFloat(storedPresupuesto) : 0;
  });
  const [gastos, setGastos] = useState(() => {
    const storedGastos = localStorage.getItem('gastos');
    return storedGastos ? JSON.parse(storedGastos) : [];
  });
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto.toString());
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const handleAgregarGasto = (e) => {
    e.preventDefault();
    if (descripcion.trim() !== '' && monto !== '') {
      const nuevoGasto = {
        id: Math.random().toString(),
        descripcion,
        monto: parseFloat(monto),
      };
      setGastos([...gastos, nuevoGasto]);
      setDescripcion('');
      setMonto('');
      setPresupuesto((prevPresupuesto) => prevPresupuesto - nuevoGasto.monto);
    }
  };

  const handleEliminarGasto = (gastoId, gastoMonto) => {
    const gastosFiltrados = gastos.filter((gasto) => gasto.id !== gastoId);
    setGastos(gastosFiltrados);
    setPresupuesto((prevPresupuesto) => prevPresupuesto + gastoMonto);
  };

  const handleSetPresupuestoInicial = () => {
    if (presupuestoInicial.trim() !== '') {
      setPresupuesto(parseFloat(presupuestoInicial));
      setPresupuestoInicial('');
    }
  };

  return (
    <div className="otro-container">
      <h1>Gestión de Presupuesto Mensual</h1>
      <div className="presupuesto-info">
        <h2>Presupuesto Mensual: ${presupuesto.toLocaleString()}</h2>
        <div>
          <input
            type="number"
            value={presupuestoInicial}
            onChange={(e) => setPresupuestoInicial(e.target.value)}
            placeholder="Presupuesto Inicial Mensual"
          />
          <button onClick={handleSetPresupuestoInicial}>Establecer Presupuesto</button>
        </div>
      </div>
      <form className="gasto-form" onSubmit={handleAgregarGasto}>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del Gasto" required />
        <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} placeholder="Monto del Gasto" required />
        <button type="submit">Agregar Gasto</button>
      </form>
      <div className="gastos-list">
        <h3>Lista de Gastos</h3>
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id}>
              <span>{gasto.descripcion}: ${gasto.monto.toLocaleString()}</span>
              <button onClick={() => handleEliminarGasto(gasto.id, gasto.monto)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Otro;
