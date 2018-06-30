import React from 'react';
import Carousel from './carousel';

const LeftPanel = (props) => {
  const feature = [...props.allRooms].sort((a, b) => {
    return b.usersOnline - a.usersOnline
  }).slice(0, 9);
  return (
    <div className="leftpanel">
      <div className="lp-header">
        <img id="main-logo" src="https://i.imgur.com/7ipEuOI.jpg" alt="logo" />
      </div>

      <div className="lp-content">
        <p>Featured Streams</p>
        <Carousel feature={feature}/>
      </div>
    </div>
  );
}

export default LeftPanel;

