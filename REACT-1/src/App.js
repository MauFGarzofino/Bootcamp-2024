import React, { useState } from 'react';
import { buttons } from './utils/buttons';
import Button from './Button';
import { validateFormula } from './utils/validator';
import './styles/App.css';

function App() {
  const [formula, setFormula] = useState('');
  const [currentValue, setCurrentValue] = useState('0');
  const [evaluate, setEvaluate] = useState(false);

  // Handle number input
  function handleNumber(value) {
    if (evaluate) {
      setCurrentValue(value);
      setFormula(value !== '0' ? value : '');
      setEvaluate(false);
    } else {
      setCurrentValue(
        currentValue === '0' ? value : currentValue + value
      );
      setFormula(
        formula === '0' ? value : formula + value
      );
    }
  }

  // Handle operator input
  function handleOperator(value) {
    if (evaluate) {
      setFormula(currentValue + value);
      setCurrentValue(value);
      setEvaluate(false);
    } else {
      if (validateFormula(formula + value)) {
        setCurrentValue(value);
        setFormula(formula + value);
      } else {
        console.log('Invalid operator sequence.');
      }
    }
  }

  // Handle equal input
  function handleEqual() {
    if(evaluate) return;

    let result = '';

    result = eval(formula) ?? NaN;

    setCurrentValue(result.toString());
    setFormula(formula + '=' + result);
    setEvaluate(true);
  }

  // Handle reset input
  function handleResetInput() {
    setFormula('');
    setCurrentValue('0');
    setEvaluate(false);
  }

  // Handle decimal input 
  function handleDecimal() {
    console.log('Decimal button is not implemented yet.');
  }

  // Map button types to their corresponding handlers
  const handlers = {
    number: handleNumber,
    equal: handleEqual,
    operator: handleOperator,
    initialize: handleResetInput,
    decimal: handleDecimal,
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <div className="formula">{formula}</div>
          <div className="output">{currentValue}</div>
        </div>
        <div className="buttons">
          {buttons.map((button) => (
            <Button
              key={button.id}
              onClick={() => handlers[button.type](button.value)}
              id={button.id}
              className="button"
            >
              {button.value}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
