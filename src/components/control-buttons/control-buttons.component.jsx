import React, { useEffect } from 'react';
import './control-buttons.styles.css';
import jacinto1_music from '../../music/jacinto-1.mp3';
import jacinto2_music from '../../music/jacinto-2.mp3';
import jacinto3_music from '../../music/jacinto-3.mp3';
import metric1_music from '../../music/metric-1.mp3';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faPause, faForward } from '@fortawesome/free-solid-svg-icons';
import { songs } from '../songs.js';


const playList = [jacinto1_music, jacinto2_music, jacinto3_music, metric1_music];

const ControlButtons = ({ isPlaying, setIsPlaying, currentSongIndex, setCurrentSongIndex }) => {
  const changePlayStatus = () => {
    setIsPlaying(!isPlaying);
  }

  const nextSong = () => {
    if(currentSongIndex === songs.length - 1)
      setCurrentSongIndex(0);
    else
      setCurrentSongIndex(currentSongIndex + 1);
  }

  const prevSong = () => {
    if(currentSongIndex === 0)
      setCurrentSongIndex(songs.length - 1);
    else
      setCurrentSongIndex(currentSongIndex - 1);
  }

  // triggered when song is changed
  useEffect(() => {
    if(window.audio)
      window.audio.pause();
    window.audio = new Audio();
    window.audio.src = playList[currentSongIndex];
  }, [currentSongIndex])

  // triggered when play status is changed
  // if the song is changed, automatically play the song
  useEffect(() => {
    if(isPlaying) {
      window.audio.play();
    } else {
      window.audio.pause();
    }
  }, [isPlaying, currentSongIndex])

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