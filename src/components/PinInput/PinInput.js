import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDisplayResults } from '../../customHooks/useDisplayResults'

const PinInput = ({ pin, userInputCode, onErrorsAttempts = () => {} }) => {
  const [ output, errorCount, setErrorCount ] = useDisplayResults(userInputCode, pin)

  useEffect(() => {
    function checkError() {
      if (userInputCode.length === 4 && pin !== userInputCode) {
        setErrorCount((current) => current + 1);
        if (errorCount >= 3) {
          onErrorsAttempts();
          setErrorCount(0);
        }
      }
    }
    checkError();
    // eslint-disable-next-line
  }, [pin, userInputCode]);

  return <div className="output-text">{output}</div>;
};

PinInput.propTypes = {
  pin: PropTypes.string.isRequired,
  userInputCode: PropTypes.string,
  onErrorsAttempts: PropTypes.func,
};

export default PinInput;
