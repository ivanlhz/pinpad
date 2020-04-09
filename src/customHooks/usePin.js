import { useState, useEffect } from 'react';

const usePin = (init = '') => {
  const [pin, setPin] = useState(init);
  useEffect(() => {
    const getPin = () => Math.floor(Math.random() * 10000 + 1).toString();
    setPin(getPin);
  }, []);

  return pin;
};

export { usePin };
