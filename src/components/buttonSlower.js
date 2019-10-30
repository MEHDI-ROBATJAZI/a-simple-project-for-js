import React,{ useContext } from 'react'

import Button from './button'
import TimerContext from '../TimerContext'

function ButtonSlower(){
  const [timer, setTimer] = useContext( TimerContext )

  return(
    <Button text={"slower"} onClick={ () => {
      setTimer(timer * 2)
    } }/>
  )
}

export default ButtonSlower
