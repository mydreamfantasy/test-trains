import React from 'react';
import './App.css';
import TrainsTable, { TrainsTableProps } from './components/TrainsTable';
import trains from './trains.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Скорости поездов</h1>
        <div className="App-container">
          <div className="App-table">
            {trains.map((obj: TrainsTableProps) => (
              <TrainsTable key={obj.name} {...obj} />
            ))}
          </div>
          <div className="App-table"></div>
        </div>
      </header>
    </div>
  );
};

export default App;
