import React from 'react';
// import jacinto1_img from '../../img/jacinto-1.jpg';
import jacinto2_img from '../../img/jacinto-2.jpg';
import jacinto3_img from '../../img/jacinto-3.jpg';
import metric1_img from '../../img/metric-1.jpg';
import './image-container.styles.css';
import { songs } from '../songs.js';

// const gallery = [jacinto1_img, jacinto2_img, jacinto3_img, metric1_img];
const gallery = ['https://source.unsplash.com/6lQDFGOB1iw', jacinto2_img, jacinto3_img, metric1_img];

const ImageContainer = ({ currentSongIndex }) => {
  return(
    <div>
      <div className="img-container">
        <img src={gallery[currentSongIndex]} alt="Album Art" />
      </div>
      <h2>{songs[currentSongIndex].displayName}</h2>
      <h3>{songs[currentSongIndex].artist}</h3>
    </div>
  );
}

export default ImageContainer;