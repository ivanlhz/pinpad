import { useState } from 'react';

const useNumberToString = (init = '', maxLength = 4) => {
  const [stringNumber, setStringNumber] = useState(init);
  const pressHandler = (value) => {
    if (stringNumber.length >= maxLength) {
      setStringNumber(value.toString());
    } else {
      setStringNumber(stringNumber + value.toString());
    }
  };

  return [ stringNumber, pressHandler, setStringNumber ];
};

export { useNumberToString };
