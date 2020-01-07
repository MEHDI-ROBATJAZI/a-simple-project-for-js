import React from 'react'

import Button from '../button'

const lineStyle = {
  display: 'inline-block'
};

function FormatButton({
  setFrameFormat,
  frameFormat
}) {
  const bgColor = 'blue';
  const textColor = 'white';

  return(
    <div style={lineStyle}>
      {
        frameFormat === 'square' && (
          <Button
            text='Circle'
            bgColor={bgColor}
            textColor={textColor}
            onClick={() => setFrameFormat('circle')}
          />
        )
      }
      {
        frameFormat === 'circle' && (
          <Button
            text='Square'
            bgColor={bgColor}
            textColor={textColor}
            onClick={() => setFrameFormat('square')}
          />
        )
      }
    </div>
  )
}

export default FormatButton;
