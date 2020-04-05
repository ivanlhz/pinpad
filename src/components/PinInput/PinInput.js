import React, { useState, useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const PinInput = ({ pin, value }) => {
  const [output, setOutput] = useState(() => '');

  useEffect(() => {
    valueHandler();
  }, [value]);

  const valueHandler = () => {
    if (value.length === 4) {
      if (pin !== value) {
        setOutput('ERROR');
      } else {
        setOutput('OK');
      }
    } else {
      setOutput(formatOuput());
    }
  };

  const formatOuput = () => {
    if (value.length === 1) {
      return value;
    } else if (value.length > 0) {
      let toReturn = new Array(value.length - 1).fill('*');
      return toReturn.join('') + value[value.length - 1];
    }
  };

  return <div className="input-text">{output}</div>;
};

PinInput.propTypes = {
  pin: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default PinInput;
