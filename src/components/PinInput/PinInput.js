import React, { useState, useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const PinInput = ({ pin, code, onErrorsAttempts = () => {} }) => {
  const [output, setOutput] = useState(() => '');
  const [errorCount, setErrorCount] = useState(1);

  useEffect(() => {
    function valueHandler() {
      if (code.length === 4) {
        if (pin !== code) {
          setOutput(<span className="error">ERROR</span>);
        } else {
          setOutput(<span className="success">OK</span>);
          setErrorCount(1);
        }
      } else {
        setOutput(formatOuput());
      }
    }
    function formatOuput() {
      if (code.length === 1) {
        return <span>{code}</span>;
      } else if (code.length > 0) {
        const toReturn = new Array(code.length - 1).fill('*');
        return (
          <>
            {toReturn.join('')}
            <span>{code[code.length - 1]}</span>
          </>
        );
      }
    }
    valueHandler();
  }, [code, pin]);

  useEffect(() => {
    function checkError() {
      if (code.length === 4 && pin !== code) {
        setErrorCount((current) => current + 1);
        if (errorCount >= 3) {
          onErrorsAttempts();
          setErrorCount(0);
        }
      }
    }
    checkError();
    // eslint-disable-next-line
  }, [pin, code]);

  return <div className="output-text">{output}</div>;
};

PinInput.propTypes = {
  pin: PropTypes.string.isRequired,
  code: PropTypes.string,
  onErrorsAttempts: PropTypes.func,
};

export default PinInput;
