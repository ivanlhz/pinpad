import React, { useState } from 'react';
import './styles.scss';

type ShowPinProps = {
  pin: string;
  className?: string;
  initialState?: boolean;
};

const ShowPin: React.FC<ShowPinProps> = ({ pin, className, initialState = false }) => {
  const [showPin, setShowPin] = useState(initialState);
  return (
    <div className={`actions ${className}`}>
      <input id="showPin" type="checkbox" onChange={(e) => setShowPin(e.target.checked)} checked={showPin} />
      <label htmlFor="showPin">{`${showPin ? 'Hide' : 'Show'} pin`}</label>
      {showPin && <span> {pin} </span>}
    </div>
  );
};

export default ShowPin;
