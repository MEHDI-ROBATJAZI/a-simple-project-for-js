import React,{ useState } from 'react';
import './App.css';

import TimerContext from './TimerContext'
import Nav from './components/nav'
import Canvas from './components/canvas'

function App() {

const onState = useState(true)
const timerState = useState(1000)
  
    return (
      <TimerContext.Provider value={timerState}>
        <Nav onState={onState} />		  
        <Canvas isOn={onState[0]} />
      </TimerContext.Provider>
    )
  }

export default App;
