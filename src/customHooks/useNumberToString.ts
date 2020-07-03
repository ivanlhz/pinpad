import { useState, Dispatch, SetStateAction } from 'react';

type pressHandler = (value: number) => void


type useNUmberToString = {
  stringNumber: string;
  pressHandler: pressHandler;
  setStringNumber: Dispatch<SetStateAction<string>>
}

const useNumberToString = (init: string = '', maxLength: number = 4): useNUmberToString => {
  const [stringNumber, setStringNumber] = useState(init);
  const pressHandler: pressHandler = (value) => {
    if (stringNumber.length >= maxLength) {
      setStringNumber(value.toString());
    } else {
      setStringNumber(stringNumber + value.toString());
    }
  };

  return { stringNumber, pressHandler, setStringNumber };
};

export { useNumberToString };
