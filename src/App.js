import React, { useState } from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumber } from './customHooks';

function App() {
  const getPin = () => Math.floor(Math.random() * 10000 + 1).toString();
  const [pin] = useState(() => getPin());
  const { disabledPad, disablePadHandler } = useDisablePad();
  const { number, pressHandler } = useNumber();

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
      </div>

      <PinInput pin={pin} code={number} onErrorsAttempts={disablePadHandler} />
      <PinPad onNumberPress={pressHandler} disabled={disabledPad} />
      <ShowPin className="footer" pin={pin} />
    </div>
  );
}

export default App;
