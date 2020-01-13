import React from 'react';

import Button from '../button';

function SpeedButton({
  time,
  onClick,
  speedMultiplier,
  ...props
}){
  const handleOnClick = () => {
    if (speedMultiplier) onClick(time * speedMultiplier);
    else onClick(1000);
  }

  return(
    <Button
      {...props}
      onClick={handleOnClick}
    />
  )
}

export default SpeedButton;
