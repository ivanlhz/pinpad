import React from 'react'

type PinPadNumberProps = {
  disabled: boolean;
  value: number;
  onNumberPress: (value: number) => void;
}

const PinPadNumber: React.FC<PinPadNumberProps> = ({disabled, value, onNumberPress}) => {
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

