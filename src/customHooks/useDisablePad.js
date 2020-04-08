import { useState } from 'react';

const useDisablePad = (init = false) => {
  const [disabledPad, setDisabledPad] = useState(init);
  const disablePadHandler = () => {
    setDisabledPad(true);
    setTimeout(() => setDisabledPad(false), 30000);
  };
  return { disabledPad, disablePadHandler };
};

export { useDisablePad };
