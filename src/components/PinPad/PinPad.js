import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const PinPad = ({ onNumberPress, disabled = false }) => {
  const numbers = new Array(10).fill(null).map((e, index) => ({
    id: Math.random().toString(),
    value: 9 - index,
  }));
  const getClassName = () => {
    return `circle ${disabled ? 'disabled' : ''}`;
  };

  return (
    <div className="pin-pad">
      {numbers.map(({ id, value }) => (
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
