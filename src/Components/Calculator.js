import React from 'react';
import './Calculator.css';
import Button from './Button';

function Calculator() {
  return (
    <div className="calculator">
      <div className="screen">
        {}
      </div>
      <div className="buttons">
        <div className="row">
          <Button label="AC" />
          <Button label="+/-" />
          <Button label="%" />
          <Button label="/" special />
        </div>
        <div className="row">
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" special />
        </div>
        <div className="row">
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" special />
        </div>
        <div className="row">
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" special />
        </div>
        <div className="row">
          <Button label="0" doubleWidth />
          <Button label="." />
          <Button label="=" special />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
