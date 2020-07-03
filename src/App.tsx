import React from 'react';
import './App.scss';
import { PinPad, PinInput, ShowPin } from './components';
import { useNumberToString, usePin } from './customHooks';
import { useCheckErrors } from './customHooks/useCheckErrors';
import { formState } from './types/common';

const App: React.FC = () => {
  const [padState, setPadState] = React.useState<formState>('notFullFilled')
  const [isShowingMessage, setIsShowingMessage] = React.useState(false)
  const { pin, setIsNewPin } = usePin();
  const { stringNumber, pressHandler, setStringNumber } = useNumberToString();
  const { errorCount, setErrorCount, hasNewError, setHasNewError } = useCheckErrors(stringNumber, pin);

  const resetCode = (callback: () => void, time: number = 3000): Promise<void> => {
    setIsShowingMessage(true);
    setStringNumber('');

    return new Promise<void>( (resolve) => {
      setTimeout(() => {
        callback()
        resolve();
      }, time);
    })
  };

  const NotAreEmpty = (pin: string, stringNumber: string): boolean => {
    return pin.length > 0 && stringNumber.length > 0
  }

  const hasEqualLength = (pin: string, stringNumber: string) : boolean => {
    return pin.length === stringNumber.length
  }

  const isValid = (pin: string, stringNumber: string): boolean => {
    return NotAreEmpty(pin, stringNumber) && hasEqualLength(pin, stringNumber) && pin === stringNumber;
  }

  if (errorCount >= 3 && hasNewError && !isShowingMessage) {
    setPadState('locked');
    setHasNewError(false)
    resetCode(() => {
      setErrorCount(0);// reset errors
      setIsNewPin(true); // Generate new pin
      setIsShowingMessage(false);
      setPadState('notFullFilled')
    }, 30000);
  }

  if (errorCount < 3 && errorCount > 0 && hasNewError && !isShowingMessage) {
    setHasNewError(false)
    setPadState('error')
    resetCode(() => {
      setIsNewPin(true); // Generate new pin
      setIsShowingMessage(false);
      setPadState('notFullFilled')
    });
  }

  if (isValid(pin, stringNumber) && !isShowingMessage) {
      setPadState('success')
      resetCode(() => {
        setErrorCount(0);// reset errors after success
        setIsNewPin(true); // Generate new pin
        setIsShowingMessage(false);
        setPadState('notFullFilled')
      })
  }

  return (
    <div className="App">
      <div className="header">
        <div className="text">Unlock with your pin code</div>
      </div>

      <PinInput userInputCode={stringNumber} formState={padState} />
      <PinPad onNumberPress={pressHandler} disabled={isShowingMessage} />
      <ShowPin className="footer" pin={pin} />
    </div>
  );
};

export default App;
