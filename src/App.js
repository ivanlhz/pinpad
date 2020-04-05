import React, { useState } from 'react';
import './App.scss';
import { PinPad, PinInput } from './components';

function App() {
  const getPin = () => Math.floor(Math.random() * 10000 + 1).toString();
  const [number, setNumber] = useState('');
  const [pin] = useState(() => getPin());

  const pressHandler = (value) => {
    if (number.length === 4) {
      setNumber(value.toString());
    } else {
      setNumber(number + value.toString());
    }
  };

  return (
    <div className="App">
      <h2>Unlock with your pin code</h2>
      <PinInput pin={pin} code={number} />
      <PinPad onNumberPress={pressHandler} />
    </div>
  );
}

export default App;
