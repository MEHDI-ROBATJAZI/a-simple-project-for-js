import React from 'react';

import ButtonSlower from './buttonSlower';
import ButtonFaster from './buttonFaster';
import ButtonDefault from './buttonDefault';
import ButtonStop from './buttonStop';
import FormatButton from './formatButton';

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
        <FormatButton
          setFrameFormat={setFrameFormat}
          frameFormat={frameFormat}
        />
        <ButtonStop onState={onState} />
        <li></li>
        <ButtonSlower />        
        <ButtonDefault />
        <ButtonFaster />
        <li>Circles/Second</li>
      </ul>
    </nav>
  )
};

export default Nav;