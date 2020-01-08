import React, { useState, useEffect } from 'react';

import './App.css';
import Nav from './components/nav';
import Canvas from './components/canvas';
import buildFrame from './utils/buildFrame';

const FRAME_MAX_SIZE = 100;

function App() {
  const [ isOn, setIsOn] = useState(true);
  const [ frameFormat, setFrameFormat ] = useState('circle');
  const [ framesStyle, setFramesStyle ] = useState([]);
  const [ time, setTime ] = useState(1000);

  useEffect(() => {
    let timerId = 0;

    if (isOn) {
      timerId = setTimeout(() => {
        const newFrameStyle = buildFrame({
          maxSize: FRAME_MAX_SIZE,
          frameFormat
        });

        setFramesStyle([...framesStyle, newFrameStyle])
      }, time );
    }

    return () => clearTimeout(timerId);

  }, [ time, isOn, framesStyle, frameFormat ]);
   
  return (
    <>
      <Nav
        frameFormat={frameFormat}
        setFrameFormat={setFrameFormat}
        isOn={isOn}
        setIsOn={setIsOn}
        time={time}
        setTime={setTime}
      />
      <Canvas
        framesStyle={framesStyle}
      />
    </>
  )
}

export default App;
