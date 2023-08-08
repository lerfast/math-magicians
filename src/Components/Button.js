import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button
      className={`button ${props.special ? 'special' : ''} ${props.doubleWidth ? 'double-width' : ''}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
