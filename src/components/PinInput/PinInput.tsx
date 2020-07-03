import React from 'react';
import './styles.scss';
import { useDisplayResults } from '../../customHooks/useDisplayResults';

type PinInputProps = {
  pin: string;
  userInputCode: string;
  isLocked?: boolean;
}

const PinInput: React.FC<PinInputProps> = ({ pin, userInputCode, isLocked = false}) => {
  const output: JSX.Element = useDisplayResults(userInputCode, pin, isLocked)

  return <div className="output-text">{output}</div>;
};


export default PinInput;
