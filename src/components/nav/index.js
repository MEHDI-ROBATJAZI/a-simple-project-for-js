import React from 'react';

import ButtonStop from '../buttonStop';
import FormatButton from '../formatButton';
import SpeedButton from '../speedButton';
import speedButtonsProps from '../../utils/speedButtonsProps';

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0
};

const navStyle = {
  height: 80
};

function Nav({
  frameFormat,
  setFrameFormat,
  isOn,
  setIsOn,
  time,
  setTime,
}) {

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <FormatButton
          setFrameFormat={setFrameFormat}
          frameFormat={frameFormat}
        />
        <ButtonStop
          isOn={isOn}
          setIsOn={setIsOn}
        />
        <li></li>
        {
          speedButtonsProps.map((speedButtonProps) => (
            <SpeedButton
              key={speedButtonProps.text}
              time={time}
              setTime={setTime}
              speedButtonProps={speedButtonProps}
            />
          ))
        }
        <li>Run</li>
      </ul>
    </nav>
  )
};

export default Nav;
