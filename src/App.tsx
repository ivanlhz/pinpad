import React from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';

const App: React.FC = () => {
  const [displayLocked, setDisplayLocked] = React.useState(false);
  const { pin, setIsNewPin } = usePin();
  const { disabledPad, disablePadHandler } = useDisablePad();
  const { stringNumber, pressHandler, setStringNumber } = useNumberToString();
  const { errorCount, setErrorCount, hasNewError, setHasNewError } = useCheckErrors(stringNumber, pin);

  const lockPadAndReset = async (): Promise<void> => {
    setDisplayLocked(true);
    setErrorCount(0);
    await disablePadHandler(30000);
    setStringNumber('');
    setIsNewPin(true);
  };

  const resetCode = (time: number = 3000): void => {
    setDisplayLocked(false);
    disablePadHandler(time);

    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsNewPin(true); // Generate new pin
      clearTimeout(timer); // Prevent to run the timer multiple times
    }, time);
  };

  if (errorCount >= 3) {
    lockPadAndReset();
  }

  if (hasNewError && errorCount < 3 && errorCount > 0) {
    setHasNewError(false);
    resetCode();
  }

  if (pin.length > 0 && stringNumber.length > 0 && pin === stringNumber && pin.length === stringNumber.length) {
    resetCode();
  }

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
      </div>

      <PinInput pin={pin} userInputCode={stringNumber} 
        isLocked={disabledPad} displayLocked={displayLocked} />
      <PinPad onNumberPress={pressHandler} disabled={disabledPad} />
      <ShowPin className="footer" pin={pin} />
    </div>
  );
};

export default App;
