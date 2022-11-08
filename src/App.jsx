import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Button";
import { formatearDinero, calcularIntereses } from "../helpers/index";

function App() {
  const [cantidad, setCantidad] = useState(500000);
  const [plazo, setPlazo] = useState(30);
  const [tasa, setTasa] = useState(0);
  const [intereses, setIntereses] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcular interés a pagar
    const resultadoInteres = calcularIntereses(cantidad, tasa, plazo);
    setIntereses(resultadoInteres)
  }, [cantidad, tasa, plazo])

  useEffect(() => {
    let total = cantidad + intereses;
    setTotal(total )
  }, [cantidad, intereses])

  const MIN = 0;
  const MAX = 3000000;
  const STEP = 1000;

  function handleChange(e) {
    setCantidad(+e.target.value);
  }  

  function handleClickDecremento() {
    const valor = cantidad - STEP

    if (valor < MIN) {
      alert('Cantidad no válida');
      return;
    }

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP

    if (valor > MAX) {
        alert('Cantidad no válida');
        return;
    }
    setCantidad(valor);
  }


  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

      {/* Header */}
      <Header />

      {/* Buttons */}
      <div className="flex justify-evenly my-6">
        <Button 
          operador='-'
          fn={handleClickDecremento}
        />        

        <input 
          type="text" 
          className="w-50 p-2 gb-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
          placeholder="Ej: $500.000"
          value={cantidad}
          onChange={handleChange}
        />

        <Button 
          operador='+'
          fn={handleClickIncremento}
        />       
      </div>

      {/* Range Bar */}
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-red-500 hoover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      {/* Amount */}
      <p className="text-center text-5xl my-10 font-extrabold text-red-600">
        {formatearDinero(cantidad)}
      </p>

      {/* Time */}
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Selecciona un <span className="text-red-500">Plazo </span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 gb-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={plazo}
        onChange={e => setPlazo(+e.target.value)}
      >
        <option value="30">30 días (1 mes)</option>
        <option value="60">60 días (2 meses)</option>
        <option value="90">90 días (3 meses)</option>
      </select>

      {/* Interest Rate */}
      <h2 className="text-2xl m-4 font-extrabold text-gray-500 text-center">
        Ingresá la <span className="text-red-500">Tasa de Interés </span>vigente
      </h2>

      <input 
        type="text" 
        className="mt-1 w-full p-2 gb-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        placeholder="Ej: 75 para 75%"
        onChange={e => setTasa(+e.target.value)}
      />

      {/* Summary */}
      <div className="my-5 space-y-3 shadow bg-gray-100 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen de tu <span className="text-red-500">Inversión</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">PLAZO: {plazo} día/s</p>
        <p className="text-xl text-gray-500 text-center font-bold">TASA: {tasa} %</p>
        <p className="text-xl text-gray-500 text-center font-bold">INTERESES: {formatearDinero(intereses)}</p>
        <p className="text-center text-5xl my-10 font-extrabold text-blue-500 flex flex-wrap justify-center">
          <span className="text-xl text-gray-500 text-center font-bold">Total a Cobrar:</span>
          {formatearDinero(total)}
        </p>
      </div>

    </div>
  );
}

export default App