import React, { useState, useEffect, useContext } from 'react';

import TimerContext from '../../TimerContext';
import buildFrame from '../../utils/buildFrame';
import './style.css';

function Canvas({
  frameFormat,
  isOn,
  maxSize
}) {

  const [ framesStyle, setFramesStyle ] = useState([]);
  const [ timer ] = useContext(TimerContext);
  
  useEffect(() => {
    const timeID = isOn && setTimeout(() => {
      const newFrameStyle = buildFrame({
        maxSize,
        frameFormat
      });

      setFramesStyle([...framesStyle, newFrameStyle]);
    }, timer );

    return () => isOn && clearTimeout(timeID);
  }, [ framesStyle, isOn ]);

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
