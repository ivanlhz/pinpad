import { useState } from 'react';

const useNumber = (init = '') => {
  const [number, setNumber] = useState(init);
  const pressHandler = (value) => {
    if (number.length === 4) {
      setNumber(value.toString());
    } else {
      setNumber(number + value.toString());
    }
  };

  return { number, pressHandler };
};

export { useNumber };
