import { useState } from 'react';

const useDisablePad = (init = false) => {
  const [disabledPad, setDisabledPad] = useState(init);
  const disablePadHandler = () => {
    setDisabledPad(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setDisabledPad(false)
        resolve()
      }, 30000)
    })
  };
  return { disabledPad, disablePadHandler };
};

export { useDisablePad };
