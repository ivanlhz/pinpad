import React from 'react';
import './styles.scss';
import { useDisplayResults } from '../../customHooks/useDisplayResults';

type PinInputProps = {
  pin: string;
  userInputCode: string;
  isLocked?: boolean;
  displayLockedText?: boolean;
}

const PinInput: React.FC<PinInputProps> = ({ pin, userInputCode = '', isLocked = false, displayLockedText = true}) => {
  const output: JSX.Element = useDisplayResults(userInputCode, pin, isLocked, displayLockedText)

  return <div className="output-text">{output}</div>;
};


export default PinInput;
