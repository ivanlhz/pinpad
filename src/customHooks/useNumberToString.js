import { useState } from 'react';

const useNumberToString = (init = '', maxLength = 4) => {
  const [number, setNumber] = useState(init);
  const pressHandler = (value) => {
    if (number.length === maxLength) {
      setNumber(value.toString());
    } else {
      setNumber(number + value.toString());
    }
  };

  return { number, pressHandler };
};

export { useNumberToString };
