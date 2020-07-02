import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDisplayResults } from '../../customHooks/useDisplayResults'

const PinInput = ({ pin, userInputCode }) => {
  const output = useDisplayResults(userInputCode, pin)

  return <div className="output-text">{output}</div>;
};

PinInput.propTypes = {
  pin: PropTypes.string.isRequired,
  userInputCode: PropTypes.string
};

export default PinInput;
