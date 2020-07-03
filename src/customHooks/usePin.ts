import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { getPin } from '../service/getPin';

type usePinReturns = {
  pin: string;
  setIsNewPin: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
}

const usePin = (length: number = 4): usePinReturns => {
  const [isNewPin, setIsNewPin] = useState(true)
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(():void => {
    const fetchData = async (): Promise<void> => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await getPin(length);
        setPin(result);
      } catch (error) {
        setIsError(true);
      }
      setIsNewPin(false);
      setIsLoading(false);
    };

    if (isNewPin && !isLoading) {
      fetchData()
    }

  }, [isNewPin]);

  return { pin, setIsNewPin, isError };
};

export { usePin };
