import React,{ useState } from 'react';
import './App.css';

import TimerContext from './TimerContext'
import Nav from './components/nav'
import Canvas from './components/canvas'

function App() {

const timerState = useState(1000)
  
    return (
      <TimerContext.Provider value={timerState}>
        <Nav />		  
        <Canvas id="par" />
      </TimerContext.Provider>
    )
  }

export default App;
