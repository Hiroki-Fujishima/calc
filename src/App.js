import React from 'react';
import './App.css';
import CalcButton from './js/calc/containers/calcButton';
import NumberButton from './js/calc/containers/numberButton';
import CalcResult from './js/calc/containers/calcResult';
import { CALC_PARAM } from './js/const/calcParam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CalcResult />
      <div><NumberButton num={7} /><NumberButton num={8} /><NumberButton num={9} /><CalcButton param={CALC_PARAM.DIVIDE} /></div>
      <div><NumberButton num={4} /><NumberButton num={5} /><NumberButton num={6} /><CalcButton param={CALC_PARAM.MULTIPLY} /></div>
      <div><NumberButton num={1} /><NumberButton num={2} /><NumberButton num={3} /><CalcButton param={CALC_PARAM.MINUS} /></div>
      <div><CalcButton param={CALC_PARAM.CLEAR} /><NumberButton num={0} /><CalcButton param={CALC_PARAM.EQUAL} /><CalcButton param={CALC_PARAM.PLUS} /></div>
      </header>
    </div>
  );
}

export default App;
