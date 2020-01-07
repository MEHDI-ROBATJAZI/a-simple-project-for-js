import React from 'react';
import './style.css';

function Button({ text, onClick, bgColor, textColor }){
  const liStyle = {
    display: 'inline-block',
    padding: '5px'
  };

  const buttonStyle = {
    background: bgColor,
    color: textColor
  };

  return(
    <li style={liStyle}>
      <div style={buttonStyle} className='button' onClick={ onClick }>{text}</div>
    </li> 
  )
}

export default Button;
