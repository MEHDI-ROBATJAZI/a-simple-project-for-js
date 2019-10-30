import React from 'react';

import Button from './button'
import ButtonSlower from './buttonSlower'
import ButtonFaster from './buttonFaster'



let ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0
}
let navStyle = {
  height: 80
}
function Nav() {

  return (
    <nav style={ navStyle }>
      <ul style={ ulStyle }>
        <Button text="dont generate circle" />
        <Button text="click to generate squere"/>
        <Button text="toggle circle squere" />
        <li>Count</li>
        <ButtonSlower />        
        <Button text="default"/>
        <ButtonFaster />
        <li>Circles/Second</li>
      </ul>
    </nav>
      
  )
}

export default Nav 

{/* <li>
        <button id="stop" style="z-index: 1000;">dont generate cicle</button>
      </li>
      <li>
        <button id="squere">click to generate squere</button>
      </li>
      <li>
        <button id="clearCircles">toggle circle squere</button>
      </li>
      <li>
        <span id="count">count</span>
      </li>
      <li>
        <button id="slowSpeed" onclick="timer(1000)">speed: slow  1000</button>
      </li>
      <li>
        <button id="normalSpeed" onclick="timer(500)">speed: normal 0.500</button>
      </li>
      <li>
        <button id="fastSpeed" onclick="timer(50)">speed: fast 0.5000</button>
      </li> */}    
