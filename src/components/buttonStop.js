import React,{ useContext } from 'react'

import Button from './button'
// import TimerContext from '../TimerContext'


function ButtonStop({onState}){
  const [isOn, setIsOn ] = onState
  
  return(
    <Button text={isOn?"stop":"start"} onClick={() => {
      setIsOn(!isOn)
    }}/>
  )
}

export default ButtonStop
