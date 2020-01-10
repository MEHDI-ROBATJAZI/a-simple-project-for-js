import React from 'react';

import ButtonStop from '../buttonStop';
import FormatButton from '../formatButton';
import SpeedButton from '../speedButton';
import speedButtonsProps from '../../utils/speedButtonsProps';
import './style.css';

function Nav({
  frameFormat,
  setFrameFormat,
  isOn,
  setIsOn,
  time,
  setTime,
  framesLength,
}) {

  return (
    <nav>
      <ul>
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
              onClick={setTime}
              {...speedButtonProps}
            />
          ))
        }
        <li className='run' data-testid="frame-counter">Run: {framesLength}</li>
      </ul>
    </nav>
  )
};

export default Nav;
