import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ShowPin = ({ pin, className, style }) => {
  const [showPin, setShowPin] = useState(false);
  return (
    <div className={`actions ${className}`} style={style}>
      <input id="showPin" type="checkbox" onChange={(e) => setShowPin(e.target.checked)} checked={showPin} />
      <label htmlFor="showPin">{`${showPin ? 'Hide' : 'Show'} pin`}</label>
      {showPin && <> ({pin}) </>}
    </div>
  );
};

ShowPin.propTypes = {
  pin: PropTypes.string.isRequired,
};

export default ShowPin;
