import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import QuoteDisplay from './Components/QuoteDisplay';

function App() {
  return (
    <div className="app">
      <h1>Math Magicians Calculator by Luis Emilio Rojas</h1>
      <Calculator />
      <QuoteDisplay />
      {' '}
      <QuoteDisplay />
    </div>
  );
}

export default App;
