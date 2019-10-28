import React from 'react';
import './App.css';

import Nav from './components/nav'
import Canvas from './components/canvas'

class App extends React.Component {

  render() {
    return (
      <>
        <Nav />		  
        <Canvas  id="par" speed={500}/>
      </>
    )
  }
}

export default App;
