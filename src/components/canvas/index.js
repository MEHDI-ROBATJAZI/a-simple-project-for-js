import React from 'react';

import './style.css';

function Canvas({
  framesStyle
}) {

  return (
    <div className='canvas'>
      <h1 data-testid="frame-counter">{framesStyle.length}</h1>
      {
        framesStyle.map( (frameStyle, index) => (
          <div key={'frame-'+index} className='frame' style={frameStyle} />
        ))
      }
    </div>
  );
};

export default Canvas;
