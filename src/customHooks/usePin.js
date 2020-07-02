import { useState, useEffect } from 'react';
import { getPin } from '../service/getPin';

const usePin = (length = 4) => {
  const [isNewPin, setIsNewPin] = useState(true)
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

  return [ pin, setIsNewPin, isError ];
};

export { usePin };
