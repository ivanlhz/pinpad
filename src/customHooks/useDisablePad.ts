import { useState } from 'react';

type useDisablePadReturns = {
  disabledPad: boolean;
  disablePadHandler: () => Promise<null>;
}

const useDisablePad = (init: boolean = false): useDisablePadReturns => {
  const [disabledPad, setDisabledPad] = useState(init);
  const disablePadHandler = () => {
    setDisabledPad(true);
    return new Promise<null>(resolve => {
      setTimeout(() => {
        setDisabledPad(false)
        resolve(null)
      }, 30000)
    })
  };
  return { disabledPad, disablePadHandler };
};

export { useDisablePad };
