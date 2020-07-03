import React from 'react';
import './styles.scss';
import { formState } from '../../types/common';

type PinInputProps = {
  userInputCode: string;
  formState: formState;
}


const PinInput: React.FC<PinInputProps> = ({ formState, userInputCode = ''}) => {

  const formatOuput = (): JSX.Element => {
    if (userInputCode.length === 1) {
      return <span>{userInputCode}</span>;
    } else if (userInputCode.length > 0) {
      const toReturn = ''.padStart(userInputCode.length - 1, '*');
      return (
        <>
          {toReturn}
          <span>{userInputCode[userInputCode.length - 1]}</span>
        </>
      );
    }

    return <></>;
  }
  
  const getOutput = () => {
    switch(formState) {
      case 'success':  return <span className="success">OK</span>;
      case 'error':  return <span className="error">ERROR</span>;
      case 'locked':  return <span className="warning">LOCKED</span>;
      default: return formatOuput();
    }
  }

  return <div className="output-text">{getOutput()}</div>;
};


export default PinInput;
