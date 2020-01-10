import React from 'react';
import './style.css';

function Button({
  text,
  onClick,
  bgColor,
  textColor
}){
  const buttonStyle = {
    background: bgColor,
    color: textColor
  };

  return(
    <li className='button-line'>
      <div style={buttonStyle} className='button' onClick={onClick}>{text}</div>
    </li> 
  )
}

export default Button;
