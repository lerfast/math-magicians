import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Home from './Home';
import CalculatorPage from './CalculatorPage';
import QuotePage from './QuotePage';

function App() {
  return (
    <Router>
      <div className="app">

        <nav className="nav">
          <div>
            <h1>Welcome to Math Magicians</h1>
          </div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/quote">Quote</Link>
          </ul>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
