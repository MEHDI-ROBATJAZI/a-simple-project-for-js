import React from 'react';

import Button from '../button';

function SpeedButton({
  time,
  setTime,
  onClick,
  speedMultiply,
  ...props
}){
  const handleOnClick = () => {
    if (speedMultiply) setTime(time * speedMultiply);
    else setTime(1000);
  }

  return(
    <Button
      {...props}
      onClick={handleOnClick}
    />
  )
}

export default SpeedButton;
