import React from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcState, setCalcState] = React.useState({ total: null, next: null, operation: null });

  const handleButtonClick = (buttonName) => {
    const newCalcState = calculate(calcState, buttonName);
    setCalcState(newCalcState);
  };

  return (
    <div className="calculator">
      <div className="screen">
        {calcState.next || calcState.total || '0'}
      </div>
      <div className="buttons">
        <div className="row">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="÷" special onClick={() => handleButtonClick('÷')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="*" special onClick={() => handleButtonClick('*')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="-" special onClick={() => handleButtonClick('-')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="+" special onClick={() => handleButtonClick('+')} />
        </div>
        <div className="row">
          <Button label="0" doubleWidth onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" special onClick={() => handleButtonClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
