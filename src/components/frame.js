import React from 'react'

// let colors = ['black','blue','green','yellow','red','violet','orange','brown','white','pink'];

// let circleStyle = {
//   borderRadius = '50%',

// }
// let squareStyle = {

// }

function Frame({style}) {

  let defaultStyle = {
    position: 'absolute',
    left: style.left,
    bottom: style.bottom,
    width: style.size,
    height: style.size,
    borderWidth: 8,
    borderStyle: 'solid',
    borderColor: style.color,
    borderRadius: '50%'
  }

  return(
    <div style={defaultStyle}></div>
  )
}

export default Frame