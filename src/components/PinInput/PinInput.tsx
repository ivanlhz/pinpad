import React from 'react';
import './styles.scss';
import { useDisplayResults } from '../../customHooks/useDisplayResults';

type PinInputProps = {
  pin: string;
  userInputCode: string;
  isLocked?: boolean;
  displayLocked?: boolean;
}

const PinInput: React.FC<PinInputProps> = ({ pin, userInputCode = '', isLocked = false, displayLocked = true}) => {
  const output: JSX.Element = useDisplayResults(userInputCode, pin, isLocked, displayLocked)

  return <div className="output-text">{output}</div>;
};


export default PinInput;
