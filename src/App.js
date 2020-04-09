import React from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumber, usePin } from './customHooks';

function App() {
  const pin = usePin();
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
