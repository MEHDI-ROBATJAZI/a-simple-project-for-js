import React from 'react';

import Button from '../button';

function SpeedButton({
  time,
  setTime,
  speedButtonProps
}){
  const {
    text,
    bgColor,
    textColor,
    click,
  } = speedButtonProps;

  return(
    <Button
      text={text}
      bgColor={bgColor}
      textColor={textColor}
      onClick={() => click({time, setTime})}
    />
  )
}

export default SpeedButton;
