import { MARCAS, PLANES, YEARS } from "../constants";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

export default function Formulario() {
  const { datos, handleChange, setError, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError("Todos los campos son requeridos");
      return;
    }
    setError(null);
    cotizarSeguro(datos);
  };

  return (
    <>
      <Error />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChange(e)}
            defaultValue=""
          >
            <option value="" disabled>
              -- Selecciona Marca --
            </option>
            {MARCAS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChange(e)}
            defaultValue=""
          >
            <option value="" disabled>
              -- Selecciona Año --
            </option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChange(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
}
