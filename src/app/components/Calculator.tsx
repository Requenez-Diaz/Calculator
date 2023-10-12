"use client";

import React, { useState } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

interface CalculatorProps {} //esta interface es para que no de error el FC que es de typescript

const Calculator: React.FC<CalculatorProps> = () => {
  const [texto, setTexto] = useState<string>("");
  const [resultado, setResultado] = useState<string | number>("");

  const handleKeyPress = (key: string) => {
    console.log(key);

    if (key === "C") {
      setTexto("");
      setResultado("");
    } else if (key === "=") {
      console.log(texto);
      try {
        const calcularResultado = evaluarExprecion(texto);
        console.log(`Resultado: ${calcularResultado}`);
        setResultado(calcularResultado);
        setTexto(calcularResultado.toString());
      } catch (error) {
        console.log(error);
        setResultado("Error");
      }
    } else {
      console.log(key);
      setTexto((inText) => inText + key);
    }
  };

  const evaluarExprecion = (expresion: string): string | number => {
    try {
      console.log(`Evaluacion de la exprecion: ${expresion}`);
      return eval(expresion);
    } catch (error) {
      console.log(evaluarExprecion);

      return "Error";
    }
  };

  return (
    <div>
      <div>
        <Display texto={texto} resultado={resultado} />
      </div>
      <div className='border border-gray-950 rounded-bl-md rounded-br-md bg-slate-400'>
        <Keyboard keyPress={handleKeyPress} />
      </div>
    </div>
  );
};

export default Calculator;
