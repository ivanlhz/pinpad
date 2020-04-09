import { useState, useEffect } from 'react';

const usePin = (init = '') => {
  const [pin, setPin] = useState(init);
  useEffect(() => {
    const getPin = () => {
      const newPin = Math.floor(Math.random() * 10000 + 1).toString();
      if (newPin.length === 4) {
        return newPin;
      } else {
        return getPin();
      }
    };

    setPin(getPin());
  }, []);

  return pin;
};

export { usePin };
