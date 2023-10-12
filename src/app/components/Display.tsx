"use client";

import React from "react";

const Display = ({
  texto,
  resultado,
}: {
  texto: string;
  resultado: number | string;
}) => {
  return (
    <div className='border border-gray-950 rounded-t-md p-1 bg-slate-700'>
      <div className=' border bg-slate-800 p-2 h-20 text-xl text-cyan-50 font-bold text-center align-middle'>
        <span>{texto}</span>
      </div>
    </div>
  );
};

export default Display;
