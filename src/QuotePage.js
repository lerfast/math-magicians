import React from 'react';
import QuoteDisplay from './Components/QuoteDisplay';
import './QuotePage.css';

function QuotePage() {
  return (
    <div className="page">
      <h2>Fun quote of the Day!</h2>
      <QuoteDisplay />
    </div>
  );
}

export default QuotePage;
