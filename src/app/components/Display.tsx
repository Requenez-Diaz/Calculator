"use client";

import React from "react";

const Display = ({ texto }: { texto: string }) => {
  return (
    <div className='border p-1 bg-slate-400'>
      <div className=' border bg-slate-200 p-2 h-20 text-xl font-bold text-center align-middle'>
        <span>{texto}</span>
      </div>
    </div>
  );
};

export default Display;
