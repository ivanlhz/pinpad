import React from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';

const App: React.FC = () => {
  const { pin, setIsNewPin } = usePin();
  const { disabledPad, disablePadHandler } = useDisablePad();
  const { stringNumber, pressHandler, setStringNumber } = useNumberToString();
  const { errorCount, setErrorCount, isRightCode, setIsRightCode, hasNewError, setHasNewError } = useCheckErrors(stringNumber, pin);

  const lockPadAndReset = async (): Promise<void> => {
      await disablePadHandler();
      setStringNumber('');
      setIsNewPin(true);
  }

  const resetCode = (time:number = 3000):void => {
    const timer: NodeJS.Timeout = setTimeout(() => {
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
