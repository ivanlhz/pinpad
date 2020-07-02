import React from 'react'

function PinPadNumber({disabled, value, onNumberPress}) {
  const getClassName = () => {
    return `circle ${disabled ? 'disabled' : ''}`;
  };
  return (
    <div data-testid={value} className={getClassName()} onClick={() => (!disabled ? onNumberPress(value) : null)}>
    {value}
  </div>
  )
}

export default PinPadNumber

