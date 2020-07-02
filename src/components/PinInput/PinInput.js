import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDisplayResults } from '../../customHooks/useDisplayResults'

const PinInput = ({ pin, userInputCode, isLocked }) => {
  const output = useDisplayResults(userInputCode, pin, isLocked)

  return <div className="output-text">{output}</div>;
};

PinInput.propTypes = {
  pin: PropTypes.string.isRequired,
  userInputCode: PropTypes.string,
  isLocked: PropTypes.bool,
};

export default PinInput;
