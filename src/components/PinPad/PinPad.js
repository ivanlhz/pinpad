import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const PinPad = ({ onNumberPress }) => {
  const numbers = new Array(10).fill(null).map((e, index) => ({
    id: Math.random().toString(),
    value: 9 - index,
  }));

  return (
    <div className="pin-pad">
      {numbers.map(({ id, value }) => (
        <div className="circle" key={id} onClick={() => onNumberPress(value)}>
          {value}
        </div>
      ))}
    </div>
  );
};

PinPad.propTypes = {
  onNumberPress: PropTypes.func.isRequired,
};

export default PinPad;
