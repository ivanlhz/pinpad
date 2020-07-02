import React from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';

function App() {
  const [pin, setIsNewPin ] = usePin();
  const [ disabledPad, disablePadHandler ] = useDisablePad();
  const [ stringNumber, pressHandler, setStringNumber ] = useNumberToString();
  const [ errorCount, setErrorCount, isRightCode, setIsRightCode, hasNewError, setHasNewError ] = useCheckErrors(stringNumber, pin);

  const lockPadAndReset = async () => {
      await disablePadHandler();
      setStringNumber('');
      setIsNewPin(true);
  }

  const resetCode = (time = 3000) => {
    const timer = setTimeout(() => {
      setStringNumber('');
      setIsNewPin(true); // Generate new pin
      clearTimeout(timer); // Prevent to run the timer multiple times
    }, time)
  }

  if (errorCount >= 3) {
    setErrorCount(0);
    lockPadAndReset();
  }

  if(hasNewError) {
    setHasNewError(false)
    resetCode();
  }

  if (isRightCode) {
    setIsRightCode(false);
    resetCode();
  }

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
      </div>

      <PinInput pin={pin} userInputCode={stringNumber} isLocked={disabledPad}/>
      <PinPad onNumberPress={pressHandler} disabled={disabledPad} />
      <ShowPin className="footer" pin={pin} />
    </div>
  );
}

export default App;
