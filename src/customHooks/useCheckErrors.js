import {useEffect, useState} from 'react'

export const useCheckErrors = (userInputCode, pin) => {
  const [errorCount, setErrorCount] = useState(0)
  const [isRightCode, setIsRightCode] = useState(false)

  useEffect(() => {
    function checkError(userInputCode, pin) {
      if (pin && userInputCode && userInputCode.length === pin.length ) {
        if(pin !== userInputCode) {
          setErrorCount((current) => current + 1);
          setIsRightCode(false)
        } else {
          setIsRightCode(true)
        }
      }
    }
    checkError(userInputCode, pin);
  }, [pin, userInputCode, isRightCode]);

  return {errorCount, setErrorCount, isRightCode}
}