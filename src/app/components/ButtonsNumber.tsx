"use client";

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
  return (
    <div
      className='border border-b-gray-950 bg-slate-500 w-4/6  flex flex-col items-center hover:bg-slate-300 hover:cursor-pointer  '
      onClick={(e) => {
        sendKey(texto);
      }}
    >
      <div
        className={`h-30  font-serif font-bold text-white flex flex-col justify-center hover:text-violet-50 ${className}`}
      >
        <span className=''>{texto}</span>
      </div>
    </div>
  );
}
