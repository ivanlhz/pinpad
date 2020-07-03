import { useState } from 'react';

type useDisablePadReturns = {
  disabledPad: boolean;
  disablePadHandler: () => Promise<void | undefined>;
}

const useDisablePad = (init: boolean = false): useDisablePadReturns => {
  const [disabledPad, setDisabledPad] = useState(init);
  const disablePadHandler = () => {
    setDisabledPad(true);
    return new Promise<void | undefined>(resolve => {
      setTimeout(() => {
        setDisabledPad(false)
        resolve()
      }, 30000)
    })
  };
  return { disabledPad, disablePadHandler };
};

export { useDisablePad };
