import React, { useEffect, useState } from 'react'


export const useDisplayResults = (userInputCode, pin) => {
  const [output, setOutput] = useState(() => '');

  useEffect(() => {
    function valueHandler(userInputCode, pin) {
      if (userInputCode.length === pin.length) {
        if (pin !== userInputCode) {
          setOutput(<span className="error">ERROR</span>);
        } else {
          setOutput(<span className="success">OK</span>);
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

  return output
}