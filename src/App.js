import React from 'react';
import Calculator from './components/Calculator';
import { Title } from './components/Calculator/Styled'

function App() {
  return (
    <div className="App">
      <Title>React Calculator</Title>
      <Calculator />
    </div>
  );
}

export default App;
