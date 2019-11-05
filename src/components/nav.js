import React from 'react';

import Button from './button'
import ButtonSlower from './buttonSlower'
import ButtonFaster from './buttonFaster'
import ButtonDefault from './buttonDefault'
import ButtonStop from './buttonStop'


const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0
};

const navStyle = {
  height: 80
};

function Nav({
  setFrameFormat,
  frameFormat,
  onState
}) {

  return (
    <nav style={ navStyle }>
      <ul style={ ulStyle }>
        <ButtonStop onState={onState} />
        {
          frameFormat === 'square' && (
            <Button
              text="Circle"
              onClick={() => setFrameFormat('circle')}
            />
          )
        }
        {
          frameFormat === 'circle' && (
            <Button
              text='Square'
              onClick={() => setFrameFormat('square')}
            />
          )
        }
        <li>Count</li>
        <ButtonSlower />        
        <ButtonDefault />
        <ButtonFaster />
        <li>Circles/Second</li>
      </ul>
    </nav>
      
  )
};

export default Nav;