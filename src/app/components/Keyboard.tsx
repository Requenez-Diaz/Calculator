import React from "react";
import ButtonsNumber from "./ButtonsNumber";
import OperandosButtons from "./OperandosButtons";

const Keyboard = ({ keyPress }: { keyPress?: any }) => {
  const sendKey = (key: string) => {
    keyPress(key);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-end'>
        <ButtonsNumber texto='C' keyPress={sendKey} />
        <ButtonsNumber texto='+/-' />
        <ButtonsNumber texto='%' />
        <OperandosButtons texto='/' keyPress={sendKey} />
      </div>
      <div className='flex justify-end'>
        <ButtonsNumber texto='7' keyPress={sendKey} />
        <ButtonsNumber texto='8' keyPress={sendKey} />
        <ButtonsNumber texto='9' keyPress={sendKey} />
        <OperandosButtons texto='*' keyPress={sendKey} />
      </div>
      <div className='flex justify-end'>
        <ButtonsNumber texto='4' keyPress={sendKey} />
        <ButtonsNumber texto='5' keyPress={sendKey} />
        <ButtonsNumber texto='6' keyPress={sendKey} />
        <OperandosButtons texto='-' keyPress={sendKey} />
      </div>
      <div className='flex justify-end'>
        <ButtonsNumber texto='1' keyPress={sendKey} />
        <ButtonsNumber texto='2' keyPress={sendKey} />
        <ButtonsNumber texto='3' keyPress={sendKey} />
        <OperandosButtons texto='+' keyPress={sendKey} />
      </div>
      <div className='flex justify-end'>
        <ButtonsNumber texto='0' keyPress={sendKey} />
        <ButtonsNumber texto='.' keyPress={sendKey} />
        <OperandosButtons texto='=' keyPress={sendKey} />
      </div>
    </div>
  );
};

export default Keyboard;
