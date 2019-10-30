import React,{ useContext } from 'react'

import Button from './button'
import TimerContext from '../TimerContext'


function ButtonFaster(){
  const [timer, setTimer]  = useContext( TimerContext )

  return(
    <Button text={"faster"} onClick={ () => {
      setTimer(timer / 2)
    } }/>
  )
}

export default ButtonFaster
