import React from "react";

export default function ButtonsNumber({ texto }: { texto: string }) {
  return (
    <div className='border bg-gradient-to-t from-gray-700 w-1/3 m-1 flex flex-col items-center hover:bg-slate-900 hover:cursor-pointer'>
      <div className='h-30 font-serif font-bold text-gray-950 flex flex-col justify-center hover:text-violet-50'>
        <span className=''>{texto}</span>
      </div>
    </div>
  );
}
