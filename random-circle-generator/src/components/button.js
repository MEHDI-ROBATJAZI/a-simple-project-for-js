import React from 'react'


let liStyle={
  display: 'inline-block'
}

function Button({text}){
  console.log(text)
  return(
    <li style={liStyle} >
      <button >{text}</button>
    </li> 
  )
}

export default Button