import React from "react";
import useCotizador from "../hooks/useCotizador";

export default function Error() {
  const { error } = useCotizador();
  return (
    <>
      {error && (
        <div className="bg-red-600 p-3 uppercase text-center text-white font-bold rounded-md">
          {error}
        </div>
      )}
    </>
  );
}
