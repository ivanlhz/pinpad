import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import {generateNumbers} from '../../utils/generators'
import PinPadNumber from './PinPadNumber';

const PinPad = ({ onNumberPress, disabled = false }) => {

  return (
    <div className="pin-pad">
      {generateNumbers().reverse().map(({ id, value }) => (
        <PinPadNumber key={id} value={value} disabled={disabled} onNumberPress={onNumberPress} />
      ))}
    </div>
  );
};

PinPad.propTypes = {
  onNumberPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default PinPad;
