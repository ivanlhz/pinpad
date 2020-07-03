import { useState } from 'react';

type useDisablePadReturns = {
  disabledPad: boolean;
  disablePadHandler: (waitTime: number) => Promise<void | undefined>;
}

const useDisablePad = (init: boolean = false): useDisablePadReturns => {
  const [disabledPad, setDisabledPad] = useState(init);
  const disablePadHandler = (waitTime: number) => {
    setDisabledPad(true);
    return new Promise<void | undefined>(resolve => {
      setTimeout(() => {
        setDisabledPad(false)
        resolve()
      }, waitTime)
    })
  };
  return { disabledPad, disablePadHandler };
};

export { useDisablePad };
