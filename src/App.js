import React from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';

function App() {
  const pin = usePin();
  const { disabledPad, disablePadHandler } = useDisablePad();
  const { stringNumber, pressHandler } = useNumberToString();
  const { errorCount, setErrorCount } = useCheckErrors(stringNumber, pin);

  if(errorCount >= 3) {
    disablePadHandler();
    setErrorCount(0);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
      </div>

      <PinInput pin={pin} userInputCode={stringNumber} />
      <PinPad onNumberPress={pressHandler} disabled={disabledPad} />
      <ShowPin className="footer" pin={pin} />
    </div>
  );
}

export default App;
