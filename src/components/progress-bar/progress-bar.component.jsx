import React from 'react';
import './progress-bar.styles.css';

const ProgressBar = () => {
  return(
    <div className="progress-container">
      <div className="progress"></div>
      <div className="duration-wrapper">
        <span>0:00</span>
        <span>0:00</span>
      </div>
    </div>
  );
}

export default ProgressBar;