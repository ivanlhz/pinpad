import React, { useState } from 'react';
import './App.scss';
import { PinPad, PinInput } from './components';

function App() {
  const getPin = () => Math.floor(Math.random() * 10000 + 1).toString();
  const [number, setNumber] = useState('');
  const [pin] = useState(() => getPin());
  const [showPin, setShowPin] = useState(false);
  const [disabledPad, setDisabledPad] = useState(false);

  const pressHandler = (value) => {
    if (number.length === 4) {
      setNumber(value.toString());
    } else {
      setNumber(number + value.toString());
    }
  };

  const disablePadHandler = () => {
    setDisabledPad(true);
    setTimeout(() => setDisabledPad(false), 30000);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
        <div className="actions">
          <input id="showPin" type="checkbox" onChange={(e) => setShowPin(e.target.checked)} checked={showPin} />
          <label htmlFor="showPin">{`${showPin ? 'Hide' : 'Show'} pin`}</label>
          {showPin && <>({pin})</>}
        </div>
      </div>

      <PinInput pin={pin} code={number} onErrorsAttempts={disablePadHandler} />
      <PinPad onNumberPress={pressHandler} disabled={disabledPad} />
    </div>
  );
}

export default App;
