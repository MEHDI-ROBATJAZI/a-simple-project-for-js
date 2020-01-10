import React from 'react';

import './style.css';

function Canvas({
  framesStyle
}) {

  return (
    <div className='canvas'>
      {
        framesStyle.map( (frameStyle, index) => (
          <div key={'frame-'+index} className='frame' style={frameStyle} />
        ))
      }
    </div>
  );
};

export default Canvas;
