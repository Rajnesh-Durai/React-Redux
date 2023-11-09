import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './feature/counter/Counter';
import Person from './feature/person/Person';

function App() {
  return (
    <div>
      <Counter/>
      <div>
        <Person/>
      </div>
    </div>
  );
}

export default App;
