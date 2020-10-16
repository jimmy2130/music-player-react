import React from 'react';
import jacinto1_img from '../../img/jacinto-1.jpg';
import jacinto1_music from '../../music/jacinto-1.mp3';
import './image-container.styles.css';

const ImageContainer = () => {
  return(
    <div>
      <div className="img-container">
        <img src={jacinto1_img} alt="Album Art" />
      </div>
      <h2>Electric Chill Machine</h2>
      <h3>Jacinto Design</h3>
      <audio src={jacinto1_music}></audio>
    </div>
  );
}

export default ImageContainer;