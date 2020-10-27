import React, { useState, useEffect } from 'react';
import './control-buttons.styles.css';
import jacinto1_music from '../../music/jacinto-1.mp3';
import jacinto2_music from '../../music/jacinto-2.mp3';
import jacinto3_music from '../../music/jacinto-3.mp3';
import metric1_music from '../../music/metric-1.mp3';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faPause, faForward } from '@fortawesome/free-solid-svg-icons';
import { songs } from '../songs.js';


const playList = [jacinto1_music, jacinto2_music, jacinto3_music, metric1_music];

const ControlButtons = ({ isPlaying, setIsPlaying, currentSongIndex, setCurrentSongIndex, musicInfo, setMusicInfo, updateBar, firstTimeSetBar, setFirstTimeSetBar }) => {
  const [clicked, setClicked] = useState(0);
  const changePlayStatus = () => {
    setIsPlaying(!isPlaying);
  }

  const nextSong = () => {
    if(currentSongIndex === songs.length - 1) {
      setCurrentSongIndex(0);
    }
    else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
    setClicked(clicked + 1);
  }

  const prevSong = () => {
    if(currentSongIndex === 0) {
      setCurrentSongIndex(songs.length - 1);
    }
    else {
      setCurrentSongIndex(currentSongIndex - 1);
    }
    setClicked(clicked + 1);
  }

  // triggered when song is changed
  useEffect(() => {
    if(window.audio)
      window.audio.pause();
    window.audio = new Audio();
    window.audio.src = playList[currentSongIndex];
  }, [currentSongIndex]);

  // if the song is changed, automatically play the song
  useEffect(() => {
    if(clicked !== 0) {
      setIsPlaying(true);
      window.audio.play();
    }
  }, [clicked, setIsPlaying]);

  // triggered when play status is changed
  useEffect(() => {
    if(isPlaying) {
      window.audio.play();
      window.audio.muted = firstTimeSetBar ? true : false;
    }
    else {
      window.audio.pause();
    }
  }, [isPlaying, firstTimeSetBar]);

  // triggered when user clicks the progress bar
  useEffect(() => {
    if(!firstTimeSetBar)
      window.audio.currentTime = updateBar;
  }, [updateBar, firstTimeSetBar]);

  // triggered when song is finished
  useEffect(() => {
    const nextSong = () => {
      if(currentSongIndex === songs.length - 1) {
        setCurrentSongIndex(0);
      }
      else {
        setCurrentSongIndex(currentSongIndex + 1);
      }
      setClicked(clicked + 1);
    }
    window.audio.addEventListener('ended', nextSong);
    return () => window.removeEventListener('ended', nextSong);
  }, [currentSongIndex, setCurrentSongIndex, clicked, setClicked]);

  // update progress bar
  useEffect(() => {
    const updateProgressBar = (e) => {
      if(firstTimeSetBar === false) {
        setMusicInfo(
          {
            duration: e.srcElement.duration,
            currentTime: e.srcElement.currentTime
          }
        )
      } 
      else if(firstTimeSetBar === true) {
        setFirstTimeSetBar(false);
        setMusicInfo(
          {
            duration: e.srcElement.duration,
            currentTime: updateBar * e.srcElement.duration
          }
        )
        window.audio.currentTime = updateBar * e.srcElement.duration;
      }
    }
    window.audio.addEventListener('timeupdate', updateProgressBar);
    return () => window.audio.removeEventListener('timeupdate', updateProgressBar);
  }, [currentSongIndex, setMusicInfo, firstTimeSetBar, setFirstTimeSetBar, updateBar]);

  return(
    <div className="player-controls">
      <FontAwesomeIcon className="fas" icon={faBackward} title="Previous" onClick={prevSong}/>
      <FontAwesomeIcon
        className="fas main-button"
        icon={
          isPlaying ? faPause : faPlay
        }
        title={
          isPlaying ? "Pause" : "Play"
        }
        onClick={changePlayStatus}/>
      <FontAwesomeIcon className="fas" icon={faForward} title="Next" onClick={nextSong}/>
    </div>
  );
}

export default ControlButtons;