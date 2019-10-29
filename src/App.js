import React,{ useState } from 'react';
import './App.css';

import TimerContext from './TimerContext'
import Nav from './components/nav'
import Canvas from './components/canvas'

function App() {

const [timer, setTimer] = useState(1000)
  
    return (
      <TimerContext.Provider value={{ timer, setTimer }}>
        <Nav />		  
        <Canvas id="par" />
      </TimerContext.Provider>
    )
  }

export default App;
