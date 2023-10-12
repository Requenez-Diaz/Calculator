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
    <div className=' rounded-t-md p-1 bg-slate-700'>
      <div className=' bg-slate-800 h-20 text-4xl text-cyan-50 font-bold text-end align-middle'>
        <span>{texto}</span>
      </div>
    </div>
  );
};

export default Display;
