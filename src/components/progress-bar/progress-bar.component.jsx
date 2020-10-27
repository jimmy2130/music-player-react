import React, { useState, useEffect, useRef } from 'react';
import './progress-bar.styles.css';

const ProgressBar = ({ currentSongIndex, musicInfo, setMusicInfo, updateBar, setUpdateBar, firstTimeSetBar, setFirstTimeSetBar }) => {
  const [durationDisplay, setDurationDisplay] = useState('0:00');
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState('0:00');
  const [progressPercent, setProgressPercent] = useState('0%');
  const [width, setWidth] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
    if(ref.current)
      setWidth(ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    const timeInfo = {
      currentTime: {
        type: 'currentTime',
        value: musicInfo.currentTime
      },
      duration: {
        type: 'duration',
        value: musicInfo.duration
      }
    };
    const changeTimeDisplay = (timeInfo) => {
      const { type, value } = timeInfo;
      const minutes = Math.floor(value / 60);
      let seconds = Math.floor(value % 60);
      if(seconds < 10) {
        seconds = `0${seconds}`;
      }
      switch(type) {
        case 'currentTime':
          setCurrentTimeDisplay(`${minutes}:${seconds}`);
          break;
        case 'duration':
          setDurationDisplay(`${minutes}:${seconds}`);
          break;
        default:
          console.log('changeTimeDisplay type error!');
      }      
    };
    changeTimeDisplay(timeInfo.currentTime);
    changeTimeDisplay(timeInfo.duration);
  }, [musicInfo]);

  useEffect(() => {
    const changeProgressBarWidth = (musicInfo) => {
      const { currentTime, duration } = musicInfo;
      let percentage = (currentTime / duration) * 100;
      if(!percentage) {
        percentage = 0;
      }
      setProgressPercent(`${percentage}%`);
    };
    changeProgressBarWidth(musicInfo);
  }, [musicInfo]);

  const setProgressBar = (e) => {
    let percentage = (e.nativeEvent.offsetX / width) * 100;
    setProgressPercent(`${percentage}%`);
    const { duration } = musicInfo;
    let currentTime;
    if(duration === 0) {
      setFirstTimeSetBar(true);
      currentTime = e.nativeEvent.offsetX / width;
    } 
    else {
      currentTime = e.nativeEvent.offsetX / width * duration;
    }
    setUpdateBar(currentTime)
  }

  return(
    <div className="progress-container" onClick={setProgressBar} ref={ref}>
      <div className="progress" style={{width: progressPercent}}></div>
      <div className="duration-wrapper">
        <span>{currentTimeDisplay}</span>
        <span>{durationDisplay}</span>
      </div>
    </div>
  );
}

export default ProgressBar;