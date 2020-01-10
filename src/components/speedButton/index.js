import React from 'react';

import Button from '../button';

function SpeedButton({
  time,
  onClick,
  speedMultiply,
  ...props
}){
  const handleOnClick = () => {
    if (speedMultiply) onClick(time * speedMultiply);
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
