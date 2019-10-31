import React from 'react'

import Button from './button'

function ButtonStop({onState}){
  const [isOn, setIsOn ] = onState
  
  return(
    <Button text={isOn?"stop":"start"} onClick={() => {
      setIsOn(!isOn)
    }}/>
  )
}

export default ButtonStop
