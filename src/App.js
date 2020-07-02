import React, {useState} from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';

function App() {
  const [pin, setIsNewPin ] = usePin();
  const [ isLocked, setIsLocked ] = useState(false)
  const { disabledPad, disablePadHandler } = useDisablePad();
  const [ stringNumber, pressHandler, setStringNumber ] = useNumberToString();
  const [ errorCount, setErrorCount, isRightCode, setIsRightCode ] = useCheckErrors(stringNumber, pin);

  const lockPadAndReset = async () => {
      setIsLocked(true)
      await disablePadHandler(300);
      setIsLocked(false)
      setStringNumber('');
  }

  if (errorCount >= 3) {
    setErrorCount(0);
    lockPadAndReset();
  }

  if (isRightCode) {
    setIsRightCode(false);
    const timer = setTimeout(() => {
      setStringNumber('');
      setIsLocked(false);
      setIsNewPin(true); // Generate new pin
      clearTimeout(timer); // Prevent to run the timer multiple times
    }, 3000)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
      </div>

      <PinInput pin={pin} userInputCode={stringNumber} isLocked={isLocked}/>
      <PinPad onNumberPress={pressHandler} disabled={disabledPad} />
      <ShowPin className="footer" pin={pin} />
    </div>
  );
}

export default App;
