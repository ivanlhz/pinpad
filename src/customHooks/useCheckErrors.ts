import { useEffect, useState } from 'react'

export const useCheckErrors = (userInputCode: string, pin: string) => {
  const [errorCount, setErrorCount] = useState(0)
  const [hasNewError, setHasNewError] = useState(false);

  useEffect(() => {
    function checkError(userInputCode: string, pin: string): void {
      if (pin && userInputCode && userInputCode.length === pin.length) {
        if (pin !== userInputCode) {
          setHasNewError(true);
          setErrorCount(current => current + 1);
        } else {
          setHasNewError(false);
        }
      }
    }
    checkError(userInputCode, pin);
  }, [pin, userInputCode]);

  return { errorCount, setErrorCount, hasNewError, setHasNewError }
}