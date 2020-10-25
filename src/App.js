import React, { useState } from 'react';
import './App.css';
import ImageContainer from './components/image-container/image-container.component';
import ProgressBar from './components/progress-bar/progress-bar.component';
import ControlButtons from './components/control-buttons/control-buttons.component';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [musicInfo, setMusicInfo] = useState({currentTime: 0, duration: 0});

  const obj = {isPlaying, setIsPlaying, currentSongIndex, setCurrentSongIndex, musicInfo, setMusicInfo};

  return (
    <div className="player-container">
      <ImageContainer {...obj}/>
      <ProgressBar {...obj}/>
      <ControlButtons {...obj}/>
    </div>
  );
}

export default App;
