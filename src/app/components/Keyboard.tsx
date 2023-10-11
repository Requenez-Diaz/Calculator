"use client";

import React from "react";
import Display from "./Display";
import ButtonsNumber from "./ButtonsNumber";

const Keyboard = () => {
  return (
    <div className='mt-5 border-1'>
      <div className='flex flex-row justify-between'>
        <ButtonsNumber texto='9' />
        <ButtonsNumber texto='8' />
        <ButtonsNumber texto='7' />
        <ButtonsNumber texto='/' />
      </div>

      <div className='flex flex-row justify-between'>
        <ButtonsNumber texto='6' />
        <ButtonsNumber texto='5' />
        <ButtonsNumber texto='4' />
        <ButtonsNumber texto='*' />
      </div>

      <div className='flex flex-row justify-between'>
        <ButtonsNumber texto='3' />
        <ButtonsNumber texto='2' />
        <ButtonsNumber texto='1' />
        <ButtonsNumber texto='-' />
      </div>
      <div className='flex flex-row justify-between'>
        <ButtonsNumber texto='0' />
        <ButtonsNumber texto='.' />
        <ButtonsNumber texto='=' />
        <ButtonsNumber texto='+' />
      </div>
    </div>
  );
};

export default Keyboard;
