import React from 'react';
import './style.scss';
import { generateNumbers } from '../../utils/generators';
import PinPadNumber from './PinPadNumber';

type PinPadProps = {
  onNumberPress: (value: number) => void;
  disabled?: boolean;
};

const PinPad: React.FC<PinPadProps> = ({ onNumberPress, disabled = false }) => {
  return (
    <div className="pin-pad">
      {generateNumbers()
        .reverse()
        .map(({ id, value }) => (
          <PinPadNumber key={id} value={value} disabled={disabled} onNumberPress={onNumberPress} />
        ))}
    </div>
  );
};

export default PinPad;
