import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({});
  const { total, next } = calculatorData;
  const result = next || total || '0';

  function handleClick(buttonName) {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  }

  return (
    <div className="calculator">
      <div className="screen">
        {result}
      </div>
      <div className="buttons">
        <div className="row">
          <Button label="AC" onClick={() => handleClick('AC')} />
          <Button label="+/-" onClick={() => handleClick('+/-')} />
          <Button label="%" onClick={() => handleClick('%')} />
          <Button label="÷" special onClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handleClick('7')} />
          <Button label="8" onClick={() => handleClick('8')} />
          <Button label="9" onClick={() => handleClick('9')} />
          <Button label="*" special onClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleClick('4')} />
          <Button label="5" onClick={() => handleClick('5')} />
          <Button label="6" onClick={() => handleClick('6')} />
          <Button label="-" special onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handleClick('1')} />
          <Button label="2" onClick={() => handleClick('2')} />
          <Button label="3" onClick={() => handleClick('3')} />
          <Button label="+" special onClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button label="0" doubleWidth onClick={() => handleClick('0')} />
          <Button label="." onClick={() => handleClick('.')} />
          <Button label="=" special onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
