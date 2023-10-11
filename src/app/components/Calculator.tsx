"use client";
import Display from "./Display";
import Keyboard from "./Keyboard";

import { useState } from "react";

const Calculator = () => {
  const [texto, setTexto] = useState("");
  return (
    <div>
      <div>
        <Display texto={texto} />
      </div>
      <div className='border border-cyan-400 bg-slate-400'>
        <Keyboard />
      </div>
    </div>
  );
};

export default Calculator;
