import {useEffect, useState} from 'react'

export const useCheckErrors = (userInputCode, pin) => {
  const [errorCount, setErrorCount] = useState(0)

  useEffect(() => {
    function checkError(userInputCode, pin) {
      if (userInputCode.length === pin.length && pin !== userInputCode) {
        setErrorCount((current) => current + 1);
      }
    }
    checkError(userInputCode, pin);
  }, [pin, userInputCode]);

  return {errorCount, setErrorCount}
}