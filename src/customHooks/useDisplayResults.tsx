import React, { useEffect, useState } from 'react';

export const useDisplayResults = (userInputCode: string, pin: string, isLocked: boolean) => {
  const [output, setOutput] = useState(<></>);

  useEffect(() => {
    function valueHandler(userInputCode: string, pin: string): void {
      if (isLocked) {
        setOutput(<span className="warning">LOCKED</span>);
      } else if (userInputCode.length === pin.length) {
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
  }, [userInputCode, pin, isLocked]);

  return output;
};
