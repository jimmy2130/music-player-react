import React from 'react';
import './App.css';
import ImageContainer from './components/image-container/image-container.component';
import ProgressBar from './components/progress-bar/progress-bar.component';
import ControlButtons from './components/control-buttons/control-buttons.component';

function App() {
  return (
    <div className="player-container">
      <ImageContainer />
      <ProgressBar />
      <ControlButtons />
    </div>
  );
}

export default App;
