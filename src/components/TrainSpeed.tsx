import React from 'react';
import { useFormContext } from 'react-hook-form';

export type TrainSpeedProps = {
  name: string;
  speedLimit: number;
};

const TrainSpeed: React.FC<TrainSpeedProps> = ({ name, speedLimit }) => {
  const methods = useFormContext();
  const nameField = `${name}`;

  const speedField = methods.register(nameField, {
    required: true,
    max: 1000,
    min: 0,
    maxLength: 3,
  });
  return (
    <>
      <label className="App-table-border-speed normalize">
        {name}
        <input type="number" defaultValue={speedLimit} {...speedField} />
      </label>
    </>
  );
};

export default TrainSpeed;
