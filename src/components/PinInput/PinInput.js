import React, { useState, useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const PinInput = ({ pin, code }) => {
  const [output, setOutput] = useState(() => '');

  useEffect(() => {
    function valueHandler() {
      if (code.length === 4) {
        if (pin !== code) {
          setOutput(<span className="error">ERROR</span>);
        } else {
          setOutput(<span className="success">OK</span>);
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

  return <div className="output-text">{output}</div>;
};

PinInput.propTypes = {
  pin: PropTypes.string.isRequired,
  code: PropTypes.string,
};

export default PinInput;
