import React, { useEffect, useState } from 'react'


export const useDisplayResults = (userInputCode, pin) => {
  const [output, setOutput] = useState(() => '');
  const [errorCount, setErrorCount] = useState(1);

  useEffect(() => {
    function valueHandler(userInputCode, pin) {
      if (userInputCode.length === 4) {
        if (pin !== userInputCode) {
          setOutput(<span className="error">ERROR</span>);
        } else {
          setOutput(<span className="success">OK</span>);
          setErrorCount(1);
        }
      } else {
        setOutput(formatOuput(userInputCode));
      }
    }
    function formatOuput(userInputCode) {
      if (userInputCode.length === 1) {
        return <span>{userInputCode}</span>;
      } else if (userInputCode.length > 0) {
        const toReturn = new Array(userInputCode.length - 1).fill('*');
        return (
          <>
            {toReturn.join('')}
            <span>{userInputCode[userInputCode.length - 1]}</span>
          </>
        );
      }
    }
    valueHandler(userInputCode, pin);
  }, [userInputCode, pin]);

  return [output, errorCount, setErrorCount]
}