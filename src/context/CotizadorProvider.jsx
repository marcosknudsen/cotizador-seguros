import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  diferenciaAnios,
  formatoDinero,
} from "../helpers/index";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({ marca: "", year: "", plan: "" });
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = (datos) => {
    let resultado = 2000;
    const date = new Date();

    resultado -= (diferenciaAnios(datos.year) * 3 * resultado) / 100;
    resultado *= calcularMarca(datos.marca);
    resultado *= calcularPlan(datos.plan);

    resultado = formatoDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        handleChange,
        datos,
        setError,
        error,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
