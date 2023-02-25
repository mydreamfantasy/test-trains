import React from 'react';
import TrainSpeed, { TrainSpeedProps } from './TrainSpeed';
import { useForm, FormProvider } from 'react-hook-form';

export type TrainsTableProps = {
  name: string;
  speedLimits: TrainSpeedProps[];
};

const TrainsTable: React.FC<TrainsTableProps> = ({ name, speedLimits }) => {
  const [speed, setSpeed] = React.useState(false);

  const methods = useForm();

  const { handleSubmit } = methods;

  React.useEffect(() => {
    if (name === 'Поезд №0') {
      setSpeed(!speed);
    }
  }, []);

  const onSubmit = (data: any) => {
    const arrayData = [];
    for (const train in data) {
      arrayData.push([train, data[train]]);
    }
    arrayData.sort((a, b) => a[1] - b[1]);

    const sortData = Object.fromEntries(arrayData);
    console.log(sortData);
  };

  return (
    <div className="App-speed-table-container">
      <div onClick={() => setSpeed(!speed)}>
        <p className="App-table-border normalize">{name}</p>
      </div>
      {speed && (
        <div className="App-speed-table">
          <FormProvider {...methods}>
            <form className="App-speed-table" onSubmit={handleSubmit(onSubmit)}>
              {speedLimits.map((obj: TrainSpeedProps) => (
                <TrainSpeed key={obj.name} {...obj} />
              ))}
              <input type="submit" />
            </form>
          </FormProvider>
        </div>
      )}
    </div>
  );
};

export default TrainsTable;
