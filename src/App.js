import React from 'react';
import './App.css';

import Nav from './components/nav'
import Canvas from './components/canvas'

class App extends React.Component {

  render() {
    return (
      <>
        <Nav />		  
        <Canvas  id="par" timer={2000}/>
      </>
    )
  }
}

export default App;
