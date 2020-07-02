import { useState } from 'react';

const useDisablePad = (init = false) => {
  const [disabledPad, setDisabledPad] = useState(init);
  const disablePadHandler = (time) => {
    setDisabledPad(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setDisabledPad(false)
        resolve()
      }, time)
    })
  };
  return { disabledPad, disablePadHandler };
};

export { useDisablePad };
