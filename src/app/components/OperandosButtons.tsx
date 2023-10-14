import React from "react";

export default function OperandosButtons({
  texto,
  keyPress,
}: {
  texto: string;
  keyPress?: any;
}) {
  const sendKey = (key: string) => {
    keyPress(key);
  };
  const customBorderStyle = "border border-black";

  return (
    <div
      className={`border bg-orange-500 w-20 h-20 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer ${customBorderStyle} `}
      onClick={(e) => {
        sendKey(texto);
      }}
    >
      <div className='font-serif font-bold text-gray-950 hover:text-violet-50'>
        <span>{texto}</span>
      </div>
    </div>
  );
}
