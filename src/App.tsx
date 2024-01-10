import React from 'react';
import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;
