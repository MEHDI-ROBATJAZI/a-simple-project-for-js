import React from 'react'


let liStyle={
  display: 'inline-block'
}


function Button({ text, onClick }){
  return(
    <li style={liStyle}>
      <button onClick={ onClick }>{text}</button>
    </li> 
  )
}

export default Button