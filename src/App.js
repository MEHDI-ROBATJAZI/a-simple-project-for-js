import React,{ useState } from 'react';
import './App.css';

import TimerContext from './TimerContext'
import Nav from './components/nav'
import Canvas from './components/canvas/'

function App() {
  const timerState = useState(1000)
  const [ frameFormat, setFrameFormat ] = useState('circle');
  
  return (
    <TimerContext.Provider value={timerState}>
      <Nav
        setFrameFormat={setFrameFormat}
        frameFormat={frameFormat}
      />
      <Canvas
        frameFormat={frameFormat}
      />
    </TimerContext.Provider>
  )
}

export default App;
