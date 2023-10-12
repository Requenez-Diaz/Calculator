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

  return (
    <div
      className='border  bg-orange-500 w-2/6  flex flex-col items-center hover:bg-slate-300 hover:cursor-pointer '
      onClick={(e) => {
        sendKey(texto);
      }}
    >
      <div className='h-30 font-serif font-bold text-gray-950 flex flex-col justify-center hover:text-violet-50'>
        <span className=''>{texto}</span>
      </div>
    </div>
  );
}
