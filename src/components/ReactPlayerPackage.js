import React from 'react';
import ReactPlayer from 'react-player';

const ReactPlayerPackage = () => {
  return (
    <div>
      <ReactPlayer
        // width="400px"
        // height="200px"
        light
        controls
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        onReady={() => console.log('video is ready')}
        onStart={() => console.log('video is onStart')}
        onPause={() => console.log('video is onPause')}
        onEnded={() => console.log('video is onEnded')}
        onError={() => console.log('video is onError')}
      />
    </div>
  );
};

export default ReactPlayerPackage;
