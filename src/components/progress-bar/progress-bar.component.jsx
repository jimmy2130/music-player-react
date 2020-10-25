import React, { useState, useEffect } from 'react';
import './progress-bar.styles.css';

const ProgressBar = ({ currentSongIndex, musicInfo }) => {
  const [durationDisplay, setDurationDisplay] = useState('0:00');
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState('0:00');

  useEffect(() => {
    const { currentTime } = musicInfo;
    const changeCurrentTimeDisplay = (currentTime) => {
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if(currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }
      setCurrentTimeDisplay(`${currentMinutes}:${currentSeconds}`);
    }
    changeCurrentTimeDisplay(currentTime);
  }, [musicInfo]);

  useEffect(() => { 
    const { duration } = musicInfo;
    const changeDurationDisplay = (duration) => {
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if(durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }
      setDurationDisplay(`${durationMinutes}:${durationSeconds}`)
    }
    changeDurationDisplay(duration);
  }, [musicInfo]);

  return(
    <div className="progress-container">
      <div className="progress"></div>
      <div className="duration-wrapper">
        <span>{currentTimeDisplay}</span>
        <span>{durationDisplay}</span>
      </div>
    </div>
  );
}

export default ProgressBar;