import {useEffect, useState} from 'react'

export const useCheckErrors = (userInputCode, pin) => {
  const [errorCount, setErrorCount] = useState(0)
  const [isRightCode, setIsRightCode] = useState(false)
  const [hasNewError, setHasNewError] = useState(false);

  useEffect(() => {
    function checkError(userInputCode, pin) {
      if (pin && userInputCode && userInputCode.length === pin.length ) {
        if(pin !== userInputCode) {
          setHasNewError(true);
          setErrorCount((current) => current + 1);
          setIsRightCode(false)
        } else {
          setHasNewError(false);
          setIsRightCode(true)
        }
      }
    }
    checkError(userInputCode, pin);
  }, [pin, userInputCode, isRightCode]);

  return {errorCount, setErrorCount, isRightCode, setIsRightCode, hasNewError, setHasNewError}
}