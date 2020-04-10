import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ShowPin = ({ pin, className, style, initialState = false }) => {
  const [showPin, setShowPin] = useState(initialState);
  return (
    <div className={`actions ${className}`} style={style}>
      <input id="showPin" type="checkbox" onChange={(e) => setShowPin(e.target.checked)} checked={showPin} />
      <label htmlFor="showPin">{`${showPin ? 'Hide' : 'Show'} pin`}</label>
      {showPin && <span> {pin} </span>}
    </div>
  );
};

ShowPin.propTypes = {
  initialState: PropTypes.bool,
  pin: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default ShowPin;
