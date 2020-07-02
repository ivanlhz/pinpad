import { useState, useEffect } from 'react';

const usePin = (length = 4) => {
  const [pin, setPin] = useState('');
  useEffect(() => {
    const getPin = () => {
      const newPin = Math.floor(Math.random() * Math.pow(10, length) + 1).toString();
      if (newPin.length === length) {
        return newPin;
      } else {
        return newPin.padStart(length, '0');
      }
    };

    setPin(getPin());
  }, [length]);

  return pin;
};

export { usePin };
