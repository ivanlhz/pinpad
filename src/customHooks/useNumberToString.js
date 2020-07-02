import { useState } from 'react';

const useNumberToString = (init = '', maxLength = 4) => {
  const [stringNumber, setNumber] = useState(init);
  const pressHandler = (value) => {
    if (stringNumber.length >= maxLength) {
      setNumber(value.toString());
    } else {
      setNumber(stringNumber + value.toString());
    }
  };

  return { stringNumber, pressHandler };
};

export { useNumberToString };
