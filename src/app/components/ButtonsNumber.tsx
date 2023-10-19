import React from "react";

export default function ButtonsNumber({
  texto,
  keyPress,
  className,
}: {
  texto: string;
  keyPress?: any;
  className?: string;
}) {
  const sendKey = (key: string) => {
    keyPress(key);
  };

  // Define una clase de estilo específica para el botón "0"
  const specialButtonClass = texto === "0" ? "flex-grow" : "";

  // Define un estilo personalizado para el borde inferior
  const customBorderStyle = "border border-black";

  return (
    <div
      className={`bg-slate-500 w-28 h-20 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer ${specialButtonClass} ${customBorderStyle} ${className}`}
      onClick={(e) => {
        sendKey(texto);
      }}
    >
      <div
        className={`h-30 font-serif font-bold text-white flex flex-col justify-center hover:text-violet-50`}
      >
        <span>{texto}</span>
      </div>
    </div>
  );
}
