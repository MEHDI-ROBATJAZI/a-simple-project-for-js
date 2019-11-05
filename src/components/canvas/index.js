import React, { useState, useEffect, useContext } from 'react';

import TimerContext from '../../TimerContext';
import './style.css';

function Canvas({
  frameFormat,
  isOn
}) {

  const [ framesStyle, setFramesStyle ] = useState([]);
  const [ timer ] = useContext(TimerContext);
  
  const maxSize = 100;

  const buildFrame = () => {    
    const R = Math.floor(Math.random() * 255).toString();
    const G = Math.floor(Math.random() * 255).toString();
    const B = Math.floor(Math.random() * 255).toString();
    const color = `rgb(${R}, ${G}, ${B})`;
    
    const size = Math.floor(Math.random() * maxSize);

    const left = Math.floor(Math.random() * ( window.innerWidth - size ));
    const bottom = Math.floor(Math.random() * ( window.innerHeight - size  ));

    const newFrameStyle = {
      color,
      left,
      bottom,
      height: size,
      width: size,
      borderRadius: (frameFormat === 'circle' ? '50%' : '0%')
    };
    
    setFramesStyle([...framesStyle, newFrameStyle]);
  };

  useEffect(() => {
    const timeID = isOn && setTimeout(buildFrame,
      timer
    );

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