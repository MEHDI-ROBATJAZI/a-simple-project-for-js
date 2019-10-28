import React, {useState}from 'react'

import Frame from './frame'


let canvaStyle = {
  borderColor: 'black',
  borderWidth: 4,
  padding: 10
}




function Canvas({speed}) {

  const [ style, setStyle ] = useState([])
  
  const maxSize = 100
  const buildFrame = () => {    
    let R = Math.floor(Math.random() * 255).toString()
    let G = Math.floor(Math.random() * 255).toString()
    let B = Math.floor(Math.random() * 255).toString()
    let color = `rgb(${R}, ${G}, ${B})`
    
    let size = Math.floor(Math.random() * maxSize)

    let left =  Math.floor(Math.random() * ( window.innerWidth - size ))
    let bottom = Math.floor(Math.random() * ( window.innerHeight - size  ))
    
    let newStyle = { color, size, left, bottom }
    setStyle([...style, newStyle])
  }  

  setTimeout(
    
      buildFrame
    
  , speed)
  

  return (
    <div style={canvaStyle}>
        <h1>{style.length}</h1>
        {style.map(item => <Frame style={item}/>)}
       
      
    </div>
  )
}

export default Canvas