import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import {generateNumbers} from '../../utils/generators'

const PinPad = ({ onNumberPress, disabled = false }) => {
  const getClassName = () => {
    return `circle ${disabled ? 'disabled' : ''}`;
  };

  return (
    <div className="pin-pad">
      {generateNumbers().reverse().map(({ id, value }) => (
        <div data-testid={value} className={getClassName()} key={id} onClick={() => (!disabled ? onNumberPress(value) : null)}>
          {value}
        </div>
      ))}
    </div>
  );
};

PinPad.propTypes = {
  onNumberPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default PinPad;
