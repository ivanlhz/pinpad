import React, {useState} from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useDisablePad, useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';

function App() {
  const pin = usePin();
  const [ isLocked, setIsLocked ] = useState(false)
  const { disabledPad, disablePadHandler } = useDisablePad();
  const { stringNumber, pressHandler, setStringNumber } = useNumberToString();
  const { errorCount, setErrorCount, isRightCode } = useCheckErrors(stringNumber, pin);

  const checkAttempts = async () => {
      setIsLocked(true)
      await disablePadHandler(3000);
      setIsLocked(false)
      setStringNumber('');
  }

  if(errorCount >= 3) {
    setErrorCount(0);
    checkAttempts();
  }

  if(isRightCode) {
    console.log('The pin should reset')
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
