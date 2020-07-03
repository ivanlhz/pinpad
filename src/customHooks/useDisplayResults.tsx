import React, { useEffect, useState } from 'react';

export const useDisplayResults = (userInputCode: string, pin: string, isLocked: boolean = false,displayLockedText: boolean = true) => {
  const [output, setOutput] = useState(<></>);

  useEffect(() => {
    console.log('isLocked, displayLockedText',isLocked, displayLockedText)
    function valueHandler(userInputCode: string, pin: string): void {
      if (isLocked && displayLockedText) {
        setOutput(<span className="warning">LOCKED</span>);
      } else if (userInputCode.length === pin.length && pin.length > 0) {
        if (pin !== userInputCode) {
          setOutput(<span className="error">ERROR</span>);
        } else {
          setOutput(<span className="success">OK</span>);
        }
      } else {
        setOutput(formatOuput(userInputCode));
      }
    }

    function formatOuput(userInputCode: string): JSX.Element {
      if (userInputCode.length === 1) {
        return <span>{userInputCode}</span>;
      } else if (userInputCode.length > 0) {
        const toReturn = ''.padStart(userInputCode.length - 1, '*');
        return (
          <>
            {toReturn}
            <span>{userInputCode[userInputCode.length - 1]}</span>
          </>
        );
      }

      return <></>;
    }

    valueHandler(userInputCode, pin);
  }, [userInputCode, pin, isLocked, displayLockedText]);

  return output;
};
