import React from 'react';
import './control-buttons.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faForward } from '@fortawesome/free-solid-svg-icons';

const ControlButtons = () => {
  return(
    <div className="player-controls">
      <FontAwesomeIcon className="fas" icon={faBackward} title="Previous"/>
      <FontAwesomeIcon className="fas main-button" icon={faPlay} title="Play"/>
      <FontAwesomeIcon className="fas" icon={faForward} title="Next"/>
    </div>
  );
}

export default ControlButtons;