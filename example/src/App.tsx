import React from 'react';
import './App.css';

import { Counter } from 'react-component-wolesblog'

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter value={1} />
    </div>
  );
}

export default App;
